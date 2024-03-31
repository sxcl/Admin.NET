/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET 通用权限开发平台
 * 让 .NET 开发更简单、更通用、更流行。前后端分离架构(.NET6/Vue3)，开箱即用紧随前沿技术。<br/>
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
 * @interface PageTenantInput
 */
export interface PageTenantInput {

    /**
     * 当前页码
     *
     * @type {number}
     * @memberof PageTenantInput
     */
    page?: number;

    /**
     * 页码容量
     *
     * @type {number}
     * @memberof PageTenantInput
     */
    pageSize?: number;

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof PageTenantInput
     */
    field?: string | null;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof PageTenantInput
     */
    order?: string | null;

    /**
     * 降序排序
     *
     * @type {string}
     * @memberof PageTenantInput
     */
    descStr?: string | null;

    /**
     * 名称
     *
     * @type {string}
     * @memberof PageTenantInput
     */
    name?: string | null;

    /**
     * 电话
     *
     * @type {string}
     * @memberof PageTenantInput
     */
    phone?: string | null;
}
