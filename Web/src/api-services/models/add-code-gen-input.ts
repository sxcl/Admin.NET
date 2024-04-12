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
 * 
 *
 * @export
 * @interface AddCodeGenInput
 */
export interface AddCodeGenInput {

    /**
     * 当前页码
     *
     * @type {number}
     * @memberof AddCodeGenInput
     */
    page?: number;

    /**
     * 页码容量
     *
     * @type {number}
     * @memberof AddCodeGenInput
     */
    pageSize?: number;

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof AddCodeGenInput
     */
    field?: string | null;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof AddCodeGenInput
     */
    order?: string | null;

    /**
     * 降序排序
     *
     * @type {string}
     * @memberof AddCodeGenInput
     */
    descStr?: string | null;

    /**
     * 类名
     *
     * @type {string}
     * @memberof AddCodeGenInput
     */
    className?: string | null;

    /**
     * 是否移除表前缀
     *
     * @type {string}
     * @memberof AddCodeGenInput
     */
    tablePrefix?: string | null;

    /**
     * 库定位器名
     *
     * @type {string}
     * @memberof AddCodeGenInput
     */
    configId?: string | null;

    /**
     * 数据库名(保留字段)
     *
     * @type {string}
     * @memberof AddCodeGenInput
     */
    dbName?: string | null;

    /**
     * 数据库类型
     *
     * @type {string}
     * @memberof AddCodeGenInput
     */
    dbType?: string | null;

    /**
     * 数据库链接
     *
     * @type {string}
     * @memberof AddCodeGenInput
     */
    connectionString?: string | null;

    /**
     * 功能名（数据库表名称）
     *
     * @type {string}
     * @memberof AddCodeGenInput
     */
    tableComment?: string | null;

    /**
     * 菜单应用分类（应用编码）
     *
     * @type {string}
     * @memberof AddCodeGenInput
     */
    menuApplication?: string | null;

    /**
     * 支持打印类型
     *
     * @type {string}
     * @memberof AddCodeGenInput
     */
    printType?: string | null;

    /**
     * 打印模版名称
     *
     * @type {string}
     * @memberof AddCodeGenInput
     */
    printName?: string | null;

    /**
     * 数据库表名
     *
     * @type {string}
     * @memberof AddCodeGenInput
     */
    tableName: string;

    /**
     * 业务名（业务代码包名称）
     *
     * @type {string}
     * @memberof AddCodeGenInput
     */
    busName: string;

    /**
     * 命名空间
     *
     * @type {string}
     * @memberof AddCodeGenInput
     */
    nameSpace: string;

    /**
     * 作者姓名
     *
     * @type {string}
     * @memberof AddCodeGenInput
     */
    authorName: string;

    /**
     * 生成方式
     *
     * @type {string}
     * @memberof AddCodeGenInput
     */
    generateType: string;

    /**
     * 菜单父级
     *
     * @type {number}
     * @memberof AddCodeGenInput
     */
    menuPid: number;
}
