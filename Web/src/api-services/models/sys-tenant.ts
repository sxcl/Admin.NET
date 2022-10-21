/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET
 * 让 .NET 开发更简单、更通用、更流行。前后端分离架构(.NET6/Vue3)，开箱即用紧随前沿技术。<br/><a href='https://gitee.com/zuohuaijun/Admin.NET/'>https://gitee.com/zuohuaijun/Admin.NET</a>
 *
 * OpenAPI spec version: 1.0.0
 * Contact: 515096995@qq.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 系统租户表
 * @export
 * @interface SysTenant
 */
export interface SysTenant {
    /**
     * 雪花Id
     * @type {number}
     * @memberof SysTenant
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof SysTenant
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof SysTenant
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof SysTenant
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof SysTenant
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof SysTenant
     */
    isDelete?: boolean;
    /**
     * 租户名称
     * @type {string}
     * @memberof SysTenant
     */
    name: string;
    /**
     * 管理员名称
     * @type {string}
     * @memberof SysTenant
     */
    adminName: string;
    /**
     * 主机
     * @type {string}
     * @memberof SysTenant
     */
    host?: string | null;
    /**
     * 电子邮箱
     * @type {string}
     * @memberof SysTenant
     */
    email?: string | null;
    /**
     * 电话
     * @type {string}
     * @memberof SysTenant
     */
    phone?: string | null;
    /**
     * 数据库连接
     * @type {string}
     * @memberof SysTenant
     */
    connection?: string | null;
    /**
     * 架构
     * @type {string}
     * @memberof SysTenant
     */
    schema?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof SysTenant
     */
    order?: number;
    /**
     * 备注
     * @type {string}
     * @memberof SysTenant
     */
    remark?: string | null;
}