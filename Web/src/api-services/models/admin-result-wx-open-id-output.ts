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

import { WxOpenIdOutput } from './wx-open-id-output';
 /**
 * 全局返回结果
 *
 * @export
 * @interface AdminResultWxOpenIdOutput
 */
export interface AdminResultWxOpenIdOutput {

    /**
     * 状态码
     *
     * @type {number}
     * @memberof AdminResultWxOpenIdOutput
     */
    code?: number;

    /**
     * 类型success、warning、error
     *
     * @type {string}
     * @memberof AdminResultWxOpenIdOutput
     */
    type?: string | null;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AdminResultWxOpenIdOutput
     */
    message?: string | null;

    /**
     * @type {WxOpenIdOutput}
     * @memberof AdminResultWxOpenIdOutput
     */
    result?: WxOpenIdOutput;

    /**
     * 附加数据
     *
     * @type {any}
     * @memberof AdminResultWxOpenIdOutput
     */
    extras?: any | null;

    /**
     * 时间
     *
     * @type {Date}
     * @memberof AdminResultWxOpenIdOutput
     */
    time?: Date;
}
