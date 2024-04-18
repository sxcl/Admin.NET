// Admin.NET 项目的版权、商标、专利和其他相关权利均受相应法律法规的保护。使用本项目应遵守相关法律法规和许可证的要求。
//
// 本项目主要遵循 MIT 许可证和 Apache 许可证（版本 2.0）进行分发和使用。许可证位于源代码树根目录中的 LICENSE-MIT 和 LICENSE-APACHE 文件。
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，我们不承担任何责任！

using Admin.NET.Application.Entity;
namespace Admin.NET.Application;
/// <summary>
/// 显卡序号表服务
/// </summary>
[ApiDescriptionSettings(ApplicationConst.GroupName, Order = 100)]
public class CardSerialNumberService : IDynamicApiController, ITransient
{
    private readonly SqlSugarRepository<CardSerialNumber> _rep;
    public CardSerialNumberService(SqlSugarRepository<CardSerialNumber> rep)
    {
        _rep = rep;
    }

    /// <summary>
    /// 分页查询显卡序号表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Page")]
    public async Task<SqlSugarPagedList<CardSerialNumberOutput>> Page(CardSerialNumberInput input)
    {
        var query = _rep.AsQueryable()
            .WhereIF(!string.IsNullOrWhiteSpace(input.SearchKey), u =>
                u.Code.Contains(input.SearchKey.Trim())
                || u.Name.Contains(input.SearchKey.Trim())
            )
            .WhereIF(!string.IsNullOrWhiteSpace(input.Code), u => u.Code.Contains(input.Code.Trim()))
            .WhereIF(!string.IsNullOrWhiteSpace(input.Name), u => u.Name.Contains(input.Name.Trim()))
            .Select<CardSerialNumberOutput>();
        if (input.CreateTimeRange != null && input.CreateTimeRange.Count > 0)
        {
            DateTime? start = input.CreateTimeRange[0];
            query = query.WhereIF(start.HasValue, u => u.CreateTime > start);
            if (input.CreateTimeRange.Count > 1 && input.CreateTimeRange[1].HasValue)
            {
                var end = input.CreateTimeRange[1].Value.AddDays(1);
                query = query.Where(u => u.CreateTime < end);
            }
        }
        if (input.UpdateTimeRange != null && input.UpdateTimeRange.Count > 0)
        {
            DateTime? start = input.UpdateTimeRange[0];
            query = query.WhereIF(start.HasValue, u => u.UpdateTime > start);
            if (input.UpdateTimeRange.Count > 1 && input.UpdateTimeRange[1].HasValue)
            {
                var end = input.UpdateTimeRange[1].Value.AddDays(1);
                query = query.Where(u => u.UpdateTime < end);
            }
        }
        return await query.OrderBuilder(input).ToPagedListAsync(input.Page, input.PageSize);
    }

    /// <summary>
    /// 增加显卡序号表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Add")]
    public async Task<long> Add(AddCardSerialNumberInput input)
    {
        var entity = input.Adapt<CardSerialNumber>();

        var existingCardSerialNumber = await _rep.GetFirstAsync(card => card.Code == entity.Code);
        if (existingCardSerialNumber != null)
        {
            throw Oops.Oh(ErrorCodeEnum.CS001);
        }

        await _rep.InsertAsync(entity);
        return entity.Id; 
    }

    /// <summary>
    /// 删除显卡序号表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Delete")]
    public async Task Delete(DeleteCardSerialNumberInput input)
    {
        var entity = await _rep.GetFirstAsync(u => u.Id == input.Id) ?? throw Oops.Oh(ErrorCodeEnum.D1002);
        await _rep.DeleteAsync(entity);   //真删除
    }

    /// <summary>
    /// 更新显卡序号表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Update")]
    public async Task Update(UpdateCardSerialNumberInput input)
    {
        var entity = input.Adapt<CardSerialNumber>();

        var existingCardSerialNumber = await _rep.GetFirstAsync(card => card.Code == entity.Code);
        if (existingCardSerialNumber != null && existingCardSerialNumber.Id != entity.Id)
        {
            throw Oops.Oh(ErrorCodeEnum.CS001);
        }

        await _rep.AsUpdateable(entity).IgnoreColumns(ignoreAllNullColumns: true).ExecuteCommandAsync();
    }

    /// <summary>
    /// 获取显卡序号表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "Detail")]
    public async Task<CardSerialNumber> Detail([FromQuery] QueryByIdCardSerialNumberInput input)
    {
        return await _rep.GetFirstAsync(u => u.Id == input.Id);
    }

    /// <summary>
    /// 获取显卡序号表列表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "List")]
    public async Task<List<CardSerialNumberOutput>> List([FromQuery] CardSerialNumberInput input)
    {
        return await _rep.AsQueryable().Select<CardSerialNumberOutput>().ToListAsync();
    }





}

