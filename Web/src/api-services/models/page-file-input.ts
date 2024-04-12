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
 * @interface PageFileInput
 */
export interface PageFileInput {

    /**
     * 当前页码
     *
     * @type {number}
     * @memberof PageFileInput
     */
    page?: number;

    /**
     * 页码容量
     *
     * @type {number}
     * @memberof PageFileInput
     */
    pageSize?: number;

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof PageFileInput
     */
    field?: string | null;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof PageFileInput
     */
    order?: string | null;

    /**
     * 降序排序
     *
     * @type {string}
     * @memberof PageFileInput
     */
    descStr?: string | null;

    /**
     * 文件名称
     *
     * @type {string}
     * @memberof PageFileInput
     */
    fileName?: string | null;

    /**
     * 开始时间
     *
     * @type {Date}
     * @memberof PageFileInput
     */
    startTime?: Date | null;

    /**
     * 结束时间
     *
     * @type {Date}
     * @memberof PageFileInput
     */
    endTime?: Date | null;
}
