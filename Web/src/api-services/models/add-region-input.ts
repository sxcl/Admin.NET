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

import { SysRegion } from './sys-region';
 /**
 * 
 *
 * @export
 * @interface AddRegionInput
 */
export interface AddRegionInput {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof AddRegionInput
     */
    id?: number;

    /**
     * 父Id
     *
     * @type {number}
     * @memberof AddRegionInput
     */
    pid?: number;

    /**
     * 简称
     *
     * @type {string}
     * @memberof AddRegionInput
     */
    shortName?: string | null;

    /**
     * 组合名
     *
     * @type {string}
     * @memberof AddRegionInput
     */
    mergerName?: string | null;

    /**
     * 行政代码
     *
     * @type {string}
     * @memberof AddRegionInput
     */
    code?: string | null;

    /**
     * 邮政编码
     *
     * @type {string}
     * @memberof AddRegionInput
     */
    zipCode?: string | null;

    /**
     * 区号
     *
     * @type {string}
     * @memberof AddRegionInput
     */
    cityCode?: string | null;

    /**
     * 层级
     *
     * @type {number}
     * @memberof AddRegionInput
     */
    level?: number;

    /**
     * 拼音
     *
     * @type {string}
     * @memberof AddRegionInput
     */
    pinYin?: string | null;

    /**
     * 经度
     *
     * @type {number}
     * @memberof AddRegionInput
     */
    lng?: number;

    /**
     * 维度
     *
     * @type {number}
     * @memberof AddRegionInput
     */
    lat?: number;

    /**
     * 排序
     *
     * @type {number}
     * @memberof AddRegionInput
     */
    orderNo?: number;

    /**
     * 备注
     *
     * @type {string}
     * @memberof AddRegionInput
     */
    remark?: string | null;

    /**
     * 机构子项
     *
     * @type {Array<SysRegion>}
     * @memberof AddRegionInput
     */
    children?: Array<SysRegion> | null;

    /**
     * 名称
     *
     * @type {string}
     * @memberof AddRegionInput
     */
    name: string;
}
