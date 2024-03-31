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

import { NoticeUserStatusEnum } from './notice-user-status-enum';
import { SysNotice } from './sys-notice';
 /**
 * 系统通知公告用户表
 *
 * @export
 * @interface SysNoticeUser
 */
export interface SysNoticeUser {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof SysNoticeUser
     */
    id?: number;

    /**
     * 通知公告Id
     *
     * @type {number}
     * @memberof SysNoticeUser
     */
    noticeId?: number;

    /**
     * @type {SysNotice}
     * @memberof SysNoticeUser
     */
    sysNotice?: SysNotice;

    /**
     * 用户Id
     *
     * @type {number}
     * @memberof SysNoticeUser
     */
    userId?: number;

    /**
     * 阅读时间
     *
     * @type {Date}
     * @memberof SysNoticeUser
     */
    readTime?: Date | null;

    /**
     * @type {NoticeUserStatusEnum}
     * @memberof SysNoticeUser
     */
    readStatus?: NoticeUserStatusEnum;
}
