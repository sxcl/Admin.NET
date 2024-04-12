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

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
/**
 * SysEmailApi - axios parameter creator
 * @export
 */
export const SysEmailApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 发送邮件
         * @param {string} content 
         * @param {string} title 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysEmailSendEmailContentTitlePost: async (content: string, title: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'content' is not null or undefined
            if (content === null || content === undefined) {
                throw new RequiredError('content','Required parameter content was null or undefined when calling apiSysEmailSendEmailContentTitlePost.');
            }
            // verify required parameter 'title' is not null or undefined
            if (title === null || title === undefined) {
                throw new RequiredError('title','Required parameter title was null or undefined when calling apiSysEmailSendEmailContentTitlePost.');
            }
            const localVarPath = `/api/sysEmail/sendEmail/{content}/{title}`
                .replace(`{${"content"}}`, encodeURIComponent(String(content)))
                .replace(`{${"title"}}`, encodeURIComponent(String(title)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SysEmailApi - functional programming interface
 * @export
 */
export const SysEmailApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 发送邮件
         * @param {string} content 
         * @param {string} title 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysEmailSendEmailContentTitlePost(content: string, title: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysEmailApiAxiosParamCreator(configuration).apiSysEmailSendEmailContentTitlePost(content, title, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysEmailApi - factory interface
 * @export
 */
export const SysEmailApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 发送邮件
         * @param {string} content 
         * @param {string} title 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysEmailSendEmailContentTitlePost(content: string, title: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysEmailApiFp(configuration).apiSysEmailSendEmailContentTitlePost(content, title, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysEmailApi - object-oriented interface
 * @export
 * @class SysEmailApi
 * @extends {BaseAPI}
 */
export class SysEmailApi extends BaseAPI {
    /**
     * 
     * @summary 发送邮件
     * @param {string} content 
     * @param {string} title 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysEmailApi
     */
    public async apiSysEmailSendEmailContentTitlePost(content: string, title: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysEmailApiFp(this.configuration).apiSysEmailSendEmailContentTitlePost(content, title, options).then((request) => request(this.axios, this.basePath));
    }
}
