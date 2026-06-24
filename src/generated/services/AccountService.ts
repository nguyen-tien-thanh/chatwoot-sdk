import type { account_detail } from '../models/account_detail';
import type { account_show_response } from '../models/account_show_response';
import type { account_update_payload } from '../models/account_update_payload';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AccountService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public getAccountDetails({
    accountId,
  }: {
    accountId: number;
  }): CancelablePromise<account_show_response> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}',
      path: {
        account_id: accountId,
      },
      errors: {
        401: `Unauthorized`,
        404: `Account not found`,
      },
    });
  }
  public updateAccount({
    accountId,
    requestBody,
  }: {
    accountId: number;
    requestBody: account_update_payload;
  }): CancelablePromise<account_detail> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/v1/accounts/{account_id}',
      path: {
        account_id: accountId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized (requires administrator role)`,
        404: `Account not found`,
        422: `Validation error`,
      },
    });
  }
}
