using Admin.NET.Core;
using System.ComponentModel.DataAnnotations;

namespace Admin.NET.Application;

    /// <summary>
    /// 显卡序号表基础输入参数
    /// </summary>
    public class CardSerialNumberBaseInput
    {
        /// <summary>
        /// 显卡序列号
        /// </summary>
        public virtual string Code { get; set; }
        
        /// <summary>
        /// 显卡名称
        /// </summary>
        public virtual string Name { get; set; }
        
        /// <summary>
        /// 租户Id
        /// </summary>
        public virtual long? TenantId { get; set; }
        
        /// <summary>
        /// 创建时间
        /// </summary>
        public virtual DateTime? CreateTime { get; set; }
        
        /// <summary>
        /// 更新时间
        /// </summary>
        public virtual DateTime? UpdateTime { get; set; }
        
        /// <summary>
        /// 创建者Id
        /// </summary>
        public virtual long? CreateUserId { get; set; }
        
        /// <summary>
        /// 创建者姓名
        /// </summary>
        public virtual string? CreateUserName { get; set; }
        
        /// <summary>
        /// 修改者Id
        /// </summary>
        public virtual long? UpdateUserId { get; set; }
        
        /// <summary>
        /// 修改者姓名
        /// </summary>
        public virtual string? UpdateUserName { get; set; }
        
        /// <summary>
        /// 创建者部门Id
        /// </summary>
        public virtual long? CreateOrgId { get; set; }
        
        /// <summary>
        /// 创建者部门名称
        /// </summary>
        public virtual string? CreateOrgName { get; set; }
        
        /// <summary>
        /// 软删除
        /// </summary>
        public virtual bool IsDelete { get; set; }
        
    }

    /// <summary>
    /// 显卡序号表分页查询输入参数
    /// </summary>
    public class CardSerialNumberInput : BasePageInput
    {
        /// <summary>
        /// 关键字查询
        /// </summary>
        public string? SearchKey { get; set; }

        /// <summary>
        /// 显卡序列号
        /// </summary>
        public string? Code { get; set; }
        
        /// <summary>
        /// 显卡名称
        /// </summary>
        public string? Name { get; set; }
        
        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime? CreateTime { get; set; }
        
        /// <summary>
         /// 创建时间范围
         /// </summary>
         public List<DateTime?> CreateTimeRange { get; set; } 
        /// <summary>
        /// 更新时间
        /// </summary>
        public DateTime? UpdateTime { get; set; }
        
        /// <summary>
         /// 更新时间范围
         /// </summary>
         public List<DateTime?> UpdateTimeRange { get; set; } 
    }

    /// <summary>
    /// 显卡序号表增加输入参数
    /// </summary>
    public class AddCardSerialNumberInput : CardSerialNumberBaseInput
    {
        /// <summary>
        /// 显卡序列号
        /// </summary>
        [Required(ErrorMessage = "显卡序列号不能为空")]
        public override string Code { get; set; }
        
        /// <summary>
        /// 显卡名称
        /// </summary>
        [Required(ErrorMessage = "显卡名称不能为空")]
        public override string Name { get; set; }
        
        /// <summary>
        /// 软删除
        /// </summary>
        [Required(ErrorMessage = "软删除不能为空")]
        public override bool IsDelete { get; set; }
        
    }

    /// <summary>
    /// 显卡序号表删除输入参数
    /// </summary>
    public class DeleteCardSerialNumberInput : BaseIdInput
    {
    }

    /// <summary>
    /// 显卡序号表更新输入参数
    /// </summary>
    public class UpdateCardSerialNumberInput : CardSerialNumberBaseInput
    {
        /// <summary>
        /// 主键Id
        /// </summary>
        [Required(ErrorMessage = "主键Id不能为空")]
        public long Id { get; set; }
        
    }

    /// <summary>
    /// 显卡序号表主键查询输入参数
    /// </summary>
    public class QueryByIdCardSerialNumberInput : DeleteCardSerialNumberInput
    {

    }
