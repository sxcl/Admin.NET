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

import { PlatformTypeEnum } from './platform-type-enum';
 /**
 * 系统微信用户表
 *
 * @export
 * @interface SysWechatUser
 */
export interface SysWechatUser {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof SysWechatUser
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof SysWechatUser
     */
    createTime?: Date | null;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof SysWechatUser
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof SysWechatUser
     */
    createUserId?: number | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof SysWechatUser
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof SysWechatUser
     */
    updateUserId?: number | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof SysWechatUser
     */
    updateUserName?: string | null;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof SysWechatUser
     */
    isDelete?: boolean;

    /**
     * 系统用户Id
     *
     * @type {number}
     * @memberof SysWechatUser
     */
    userId?: number;

    /**
     * @type {PlatformTypeEnum}
     * @memberof SysWechatUser
     */
    platformType?: PlatformTypeEnum;

    /**
     * OpenId
     *
     * @type {string}
     * @memberof SysWechatUser
     */
    openId: string;

    /**
     * 会话密钥
     *
     * @type {string}
     * @memberof SysWechatUser
     */
    sessionKey?: string | null;

    /**
     * UnionId
     *
     * @type {string}
     * @memberof SysWechatUser
     */
    unionId?: string | null;

    /**
     * 昵称
     *
     * @type {string}
     * @memberof SysWechatUser
     */
    nickName?: string | null;

    /**
     * 头像
     *
     * @type {string}
     * @memberof SysWechatUser
     */
    avatar?: string | null;

    /**
     * 手机号码
     *
     * @type {string}
     * @memberof SysWechatUser
     */
    mobile?: string | null;

    /**
     * 性别
     *
     * @type {number}
     * @memberof SysWechatUser
     */
    sex?: number | null;

    /**
     * 语言
     *
     * @type {string}
     * @memberof SysWechatUser
     */
    language?: string | null;

    /**
     * 城市
     *
     * @type {string}
     * @memberof SysWechatUser
     */
    city?: string | null;

    /**
     * 省
     *
     * @type {string}
     * @memberof SysWechatUser
     */
    province?: string | null;

    /**
     * 国家
     *
     * @type {string}
     * @memberof SysWechatUser
     */
    country?: string | null;

    /**
     * AccessToken
     *
     * @type {string}
     * @memberof SysWechatUser
     */
    accessToken?: string | null;

    /**
     * RefreshToken
     *
     * @type {string}
     * @memberof SysWechatUser
     */
    refreshToken?: string | null;

    /**
     * 过期时间
     *
     * @type {number}
     * @memberof SysWechatUser
     */
    expiresIn?: number | null;

    /**
     * 用户授权的作用域，使用逗号分隔
     *
     * @type {string}
     * @memberof SysWechatUser
     */
    scope?: string | null;
}
