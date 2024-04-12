/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET 通用权限开发平台
 * 让 .NET 开发更简单、更通用、更流行。整合最新技术，模块插件式开发，前后端分离，开箱即用。<br/><br/>👮不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，均与作者无关！
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

 /**
 * 代码生成字段配置表
 *
 * @export
 * @interface SysCodeGenConfig
 */
export interface SysCodeGenConfig {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof SysCodeGenConfig
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof SysCodeGenConfig
     */
    createTime?: Date | null;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof SysCodeGenConfig
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof SysCodeGenConfig
     */
    createUserId?: number | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof SysCodeGenConfig
     */
    updateUserId?: number | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    updateUserName?: string | null;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof SysCodeGenConfig
     */
    isDelete?: boolean;

    /**
     * 代码生成主表Id
     *
     * @type {number}
     * @memberof SysCodeGenConfig
     */
    codeGenId?: number;

    /**
     * 数据库字段名
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    columnName: string;

    /**
     * 实体属性名
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    propertyName: string;

    /**
     * 字段数据长度
     *
     * @type {number}
     * @memberof SysCodeGenConfig
     */
    columnLength?: number;

    /**
     * 字段描述
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    columnComment?: string | null;

    /**
     * .NET数据类型
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    netType?: string | null;

    /**
     * 作用类型（字典）
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    effectType?: string | null;

    /**
     * 外键实体名称
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    fkEntityName?: string | null;

    /**
     * 外键表名称
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    fkTableName?: string | null;

    /**
     * 外键显示字段
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    fkColumnName?: string | null;

    /**
     * 外键显示字段.NET类型
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    fkColumnNetType?: string | null;

    /**
     * 字典编码
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    dictTypeCode?: string | null;

    /**
     * 列表是否缩进（字典）
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    whetherRetract?: string | null;

    /**
     * 是否必填（字典）
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    whetherRequired?: string | null;

    /**
     * 是否可排序（字典）
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    whetherSortable?: string | null;

    /**
     * 是否是查询条件
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    queryWhether?: string | null;

    /**
     * 查询方式
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    queryType?: string | null;

    /**
     * 列表显示
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    whetherTable?: string | null;

    /**
     * 增改
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    whetherAddUpdate?: string | null;

    /**
     * 主键
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    columnKey?: string | null;

    /**
     * 数据库中类型（物理类型）
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    dataType?: string | null;

    /**
     * 是否通用字段
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    whetherCommon?: string | null;

    /**
     * 显示文本字段
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    displayColumn?: string | null;

    /**
     * 选中值字段
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    valueColumn?: string | null;

    /**
     * 父级字段
     *
     * @type {string}
     * @memberof SysCodeGenConfig
     */
    pidColumn?: string | null;

    /**
     * 排序
     *
     * @type {number}
     * @memberof SysCodeGenConfig
     */
    orderNo?: number;
}
