import type { audit_log } from '../models/audit_log';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AuditLogsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public getAccountAuditLogs({
    accountId,
    page = 1,
  }: {
    accountId: number;
    page?: number;
  }): CancelablePromise<{
    per_page?: number;
    total_entries?: number;
    current_page?: number;
    audit_logs?: Array<audit_log>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/audit_logs',
      path: {
        account_id: accountId,
      },
      query: {
        page: page,
      },
      errors: {
        403: `Access denied`,
        422: `Feature not enabled or not available in current plan`,
      },
    });
  }
}
