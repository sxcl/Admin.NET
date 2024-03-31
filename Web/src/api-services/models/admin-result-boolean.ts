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
 * 全局返回结果
 *
 * @export
 * @interface AdminResultBoolean
 */
export interface AdminResultBoolean {

    /**
     * 状态码
     *
     * @type {number}
     * @memberof AdminResultBoolean
     */
    code?: number;

    /**
     * 类型success、warning、error
     *
     * @type {string}
     * @memberof AdminResultBoolean
     */
    type?: string | null;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AdminResultBoolean
     */
    message?: string | null;

    /**
     * 数据
     *
     * @type {boolean}
     * @memberof AdminResultBoolean
     */
    result?: boolean;

    /**
     * 附加数据
     *
     * @type {any}
     * @memberof AdminResultBoolean
     */
    extras?: any | null;

    /**
     * 时间
     *
     * @type {Date}
     * @memberof AdminResultBoolean
     */
    time?: Date;
}
