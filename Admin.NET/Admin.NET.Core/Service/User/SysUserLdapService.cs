﻿// 大名科技（天津）有限公司 版权所有
//
// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动
//
// 任何基于本项目二次开发而产生的一切法律纠纷和责任，均与作者无关

namespace Admin.NET.Core.Service;

/// <summary>
/// 用户域账号服务
/// </summary>
public class SysUserLdapService : ITransient
{
    private readonly SqlSugarRepository<SysUserLdap> _sysUserLdapRep;

    public SysUserLdapService(SqlSugarRepository<SysUserLdap> sysUserLdapRep)
    {
        _sysUserLdapRep = sysUserLdapRep;
    }

    /// <summary>
    /// 批量插入域账号
    /// </summary>
    /// <param name="tenantId"></param>
    /// <param name="sysUserLdaps"></param>
    /// <returns></returns>
    public async Task InsertUserLdaps(long tenantId, List<SysUserLdap> sysUserLdaps)
    {
        await _sysUserLdapRep.DeleteAsync(u => u.TenantId == tenantId);

        await _sysUserLdapRep.InsertRangeAsync(sysUserLdaps);

        await _sysUserLdapRep.AsUpdateable()
            .InnerJoin<SysUser>((l, u) => l.EmployeeId == u.Account && u.Status == StatusEnum.Enable && u.IsDelete == false && l.IsDelete == false)
            .SetColumns((l, u) => new SysUserLdap { UserId = u.Id })
            .ExecuteCommandAsync();
    }

    /// <summary>
    /// 增加域账号
    /// </summary>
    /// <param name="tenantId"></param>
    /// <param name="userId"></param>
    /// <param name="account"></param>
    /// <param name="domainAccount"></param>
    /// <returns></returns>
    public async Task AddUserLdap(long tenantId, long userId, string account, string domainAccount)
    {
        var userLdap = await _sysUserLdapRep.GetFirstAsync(u => u.TenantId == tenantId && u.IsDelete == false && (u.Account == account || u.UserId == userId || u.EmployeeId == domainAccount));
        if (userLdap != null)
            await _sysUserLdapRep.DeleteByIdAsync(userLdap.Id);

        if (!string.IsNullOrWhiteSpace(domainAccount))
            await _sysUserLdapRep.InsertAsync(new SysUserLdap { EmployeeId = account, TenantId = tenantId, UserId = userId, Account = domainAccount });
    }

    /// <summary>
    /// 删除域账号
    /// </summary>
    /// <param name="userId"></param>
    /// <returns></returns>
    public async Task DeleteUserLdapByUserId(long userId)
    {
        await _sysUserLdapRep.DeleteAsync(u => u.UserId == userId);
    }
}