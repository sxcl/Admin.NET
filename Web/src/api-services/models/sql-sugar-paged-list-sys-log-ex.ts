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

import { SysLogEx } from './sys-log-ex';
 /**
 * 分页泛型集合
 *
 * @export
 * @interface SqlSugarPagedListSysLogEx
 */
export interface SqlSugarPagedListSysLogEx {

    /**
     * 页码
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysLogEx
     */
    page?: number;

    /**
     * 页容量
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysLogEx
     */
    pageSize?: number;

    /**
     * 总条数
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysLogEx
     */
    total?: number;

    /**
     * 总页数
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysLogEx
     */
    totalPages?: number;

    /**
     * 当前页集合
     *
     * @type {Array<SysLogEx>}
     * @memberof SqlSugarPagedListSysLogEx
     */
    items?: Array<SysLogEx> | null;

    /**
     * 是否有上一页
     *
     * @type {boolean}
     * @memberof SqlSugarPagedListSysLogEx
     */
    hasPrevPage?: boolean;

    /**
     * 是否有下一页
     *
     * @type {boolean}
     * @memberof SqlSugarPagedListSysLogEx
     */
    hasNextPage?: boolean;
}
