using Admin.NET.Core;
namespace Admin.NET.Application.Entity;

/// <summary>
/// 显卡序号表
/// </summary>
[SugarTable("CardSerialNumber","显卡序号表")]
public class CardSerialNumber  : EntityBase
{
    /// <summary>
    /// 显卡序列号
    /// </summary>
    [Required]
    [SugarColumn(ColumnName = "Code", ColumnDescription = "显卡序列号", Length = 8)]
    public string Code { get; set; }
    
    /// <summary>
    /// 显卡名称
    /// </summary>
    [Required]
    [SugarColumn(ColumnName = "Name", ColumnDescription = "显卡名称", Length = 128)]
    public string Name { get; set; }
    
    /// <summary>
    /// 租户Id
    /// </summary>
    [SugarColumn(ColumnName = "TenantId", ColumnDescription = "租户Id")]
    public long? TenantId { get; set; }
    
    /// <summary>
    /// 创建者部门Id
    /// </summary>
    [SugarColumn(ColumnName = "CreateOrgId", ColumnDescription = "创建者部门Id")]
    public long? CreateOrgId { get; set; }
    
    /// <summary>
    /// 创建者部门名称
    /// </summary>
    [SugarColumn(ColumnName = "CreateOrgName", ColumnDescription = "创建者部门名称", Length = 64)]
    public string? CreateOrgName { get; set; }
    
}
