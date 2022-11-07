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
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AdminResultFileOutput } from '../models';
import { AdminResultIActionResult } from '../models';
import { AdminResultListFileOutput } from '../models';
import { AdminResultSqlSugarPagedListSysFile } from '../models';
import { DeleteFileInput } from '../models';
import { FileInput } from '../models';
/**
 * SysFileApi - axios parameter creator
 * @export
 */
export const SysFileApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 删除文件
         * @param {DeleteFileInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysFileDeletePost: async (body?: DeleteFileInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysFile/delete`;
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

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

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
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 下载文件(文件流)
         * @param {FileInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysFileDownloadPost: async (body?: FileInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysFile/download`;
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

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

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
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取文件分页列表
         * @param {string} [fileName] 文件名称
         * @param {Date} [startTime] 开始时间
         * @param {Date} [endTime] 结束时间
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysFilePageGet: async (fileName?: string, startTime?: Date, endTime?: Date, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysFile/page`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            if (fileName !== undefined) {
                localVarQueryParameter['FileName'] = fileName;
            }

            if (startTime !== undefined) {
                localVarQueryParameter['StartTime'] = (startTime as any instanceof Date) ?
                    (startTime as any).toISOString() :
                    startTime;
            }

            if (endTime !== undefined) {
                localVarQueryParameter['EndTime'] = (endTime as any instanceof Date) ?
                    (endTime as any).toISOString() :
                    endTime;
            }

            if (page !== undefined) {
                localVarQueryParameter['Page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['PageSize'] = pageSize;
            }

            if (field !== undefined) {
                localVarQueryParameter['Field'] = field;
            }

            if (order !== undefined) {
                localVarQueryParameter['Order'] = order;
            }

            if (descStr !== undefined) {
                localVarQueryParameter['DescStr'] = descStr;
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
        /**
         * 
         * @summary 上传头像
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysFileUploadAvatarPostForm: async (file?: Blob, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysFile/uploadAvatar`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

            // authentication Bearer required


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }

            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
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
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 上传文件
         * @param {Blob} [file] 
         * @param {string} [path] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysFileUploadPostForm: async (file?: Blob, path?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysFile/upload`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

            // authentication Bearer required

            if (path !== undefined) {
                localVarQueryParameter['path'] = path;
            }


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }

            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
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
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 上传电子签名
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysFileUploadSignaturePostForm: async (file?: Blob, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysFile/uploadSignature`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

            // authentication Bearer required


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }

            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
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
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 上传多文件
         * @param {Array<Blob>} [files] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sysFileUploadsPostForm: async (files?: Array<Blob>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sysFile/uploads`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

            // authentication Bearer required

            if (files) {
                files.forEach((element) => {
                    localVarFormParams.append('files', element as any);
                })
            }

            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
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
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SysFileApi - functional programming interface
 * @export
 */
export const SysFileApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 删除文件
         * @param {DeleteFileInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysFileDeletePost(body?: DeleteFileInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysFileApiAxiosParamCreator(configuration).sysFileDeletePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 下载文件(文件流)
         * @param {FileInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysFileDownloadPost(body?: FileInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultIActionResult>>> {
            const localVarAxiosArgs = await SysFileApiAxiosParamCreator(configuration).sysFileDownloadPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取文件分页列表
         * @param {string} [fileName] 文件名称
         * @param {Date} [startTime] 开始时间
         * @param {Date} [endTime] 结束时间
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysFilePageGet(fileName?: string, startTime?: Date, endTime?: Date, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultSqlSugarPagedListSysFile>>> {
            const localVarAxiosArgs = await SysFileApiAxiosParamCreator(configuration).sysFilePageGet(fileName, startTime, endTime, page, pageSize, field, order, descStr, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 上传头像
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysFileUploadAvatarPostForm(file?: Blob, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultFileOutput>>> {
            const localVarAxiosArgs = await SysFileApiAxiosParamCreator(configuration).sysFileUploadAvatarPostForm(file, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 上传文件
         * @param {Blob} [file] 
         * @param {string} [path] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysFileUploadPostForm(file?: Blob, path?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultFileOutput>>> {
            const localVarAxiosArgs = await SysFileApiAxiosParamCreator(configuration).sysFileUploadPostForm(file, path, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 上传电子签名
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysFileUploadSignaturePostForm(file?: Blob, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultFileOutput>>> {
            const localVarAxiosArgs = await SysFileApiAxiosParamCreator(configuration).sysFileUploadSignaturePostForm(file, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 上传多文件
         * @param {Array<Blob>} [files] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysFileUploadsPostForm(files?: Array<Blob>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListFileOutput>>> {
            const localVarAxiosArgs = await SysFileApiAxiosParamCreator(configuration).sysFileUploadsPostForm(files, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysFileApi - factory interface
 * @export
 */
export const SysFileApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 删除文件
         * @param {DeleteFileInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysFileDeletePost(body?: DeleteFileInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysFileApiFp(configuration).sysFileDeletePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 下载文件(文件流)
         * @param {FileInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysFileDownloadPost(body?: FileInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultIActionResult>> {
            return SysFileApiFp(configuration).sysFileDownloadPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取文件分页列表
         * @param {string} [fileName] 文件名称
         * @param {Date} [startTime] 开始时间
         * @param {Date} [endTime] 结束时间
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysFilePageGet(fileName?: string, startTime?: Date, endTime?: Date, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultSqlSugarPagedListSysFile>> {
            return SysFileApiFp(configuration).sysFilePageGet(fileName, startTime, endTime, page, pageSize, field, order, descStr, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 上传头像
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysFileUploadAvatarPostForm(file?: Blob, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultFileOutput>> {
            return SysFileApiFp(configuration).sysFileUploadAvatarPostForm(file, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 上传文件
         * @param {Blob} [file] 
         * @param {string} [path] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysFileUploadPostForm(file?: Blob, path?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultFileOutput>> {
            return SysFileApiFp(configuration).sysFileUploadPostForm(file, path, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 上传电子签名
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysFileUploadSignaturePostForm(file?: Blob, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultFileOutput>> {
            return SysFileApiFp(configuration).sysFileUploadSignaturePostForm(file, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 上传多文件
         * @param {Array<Blob>} [files] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sysFileUploadsPostForm(files?: Array<Blob>, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListFileOutput>> {
            return SysFileApiFp(configuration).sysFileUploadsPostForm(files, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysFileApi - object-oriented interface
 * @export
 * @class SysFileApi
 * @extends {BaseAPI}
 */
export class SysFileApi extends BaseAPI {
    /**
     * 
     * @summary 删除文件
     * @param {DeleteFileInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysFileApi
     */
    public async sysFileDeletePost(body?: DeleteFileInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysFileApiFp(this.configuration).sysFileDeletePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 下载文件(文件流)
     * @param {FileInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysFileApi
     */
    public async sysFileDownloadPost(body?: FileInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultIActionResult>> {
        return SysFileApiFp(this.configuration).sysFileDownloadPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取文件分页列表
     * @param {string} [fileName] 文件名称
     * @param {Date} [startTime] 开始时间
     * @param {Date} [endTime] 结束时间
     * @param {number} [page] 当前页码
     * @param {number} [pageSize] 页码容量
     * @param {string} [field] 排序字段
     * @param {string} [order] 排序方向
     * @param {string} [descStr] 降序排序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysFileApi
     */
    public async sysFilePageGet(fileName?: string, startTime?: Date, endTime?: Date, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultSqlSugarPagedListSysFile>> {
        return SysFileApiFp(this.configuration).sysFilePageGet(fileName, startTime, endTime, page, pageSize, field, order, descStr, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 上传头像
     * @param {Blob} [file] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysFileApi
     */
    public async sysFileUploadAvatarPostForm(file?: Blob, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultFileOutput>> {
        return SysFileApiFp(this.configuration).sysFileUploadAvatarPostForm(file, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 上传文件
     * @param {Blob} [file] 
     * @param {string} [path] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysFileApi
     */
    public async sysFileUploadPostForm(file?: Blob, path?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultFileOutput>> {
        return SysFileApiFp(this.configuration).sysFileUploadPostForm(file, path, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 上传电子签名
     * @param {Blob} [file] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysFileApi
     */
    public async sysFileUploadSignaturePostForm(file?: Blob, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultFileOutput>> {
        return SysFileApiFp(this.configuration).sysFileUploadSignaturePostForm(file, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 上传多文件
     * @param {Array<Blob>} [files] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysFileApi
     */
    public async sysFileUploadsPostForm(files?: Array<Blob>, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListFileOutput>> {
        return SysFileApiFp(this.configuration).sysFileUploadsPostForm(files, options).then((request) => request(this.axios, this.basePath));
    }
}
