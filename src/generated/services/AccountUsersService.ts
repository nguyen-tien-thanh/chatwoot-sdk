import type { account_user } from '../models/account_user';
import type { account_user_create_update_payload } from '../models/account_user_create_update_payload';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AccountUsersService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public listAllAccountUsers({
    accountId,
  }: {
    accountId: number;
  }): CancelablePromise<account_user> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/platform/api/v1/accounts/{account_id}/account_users',
      path: {
        account_id: accountId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public createAnAccountUser({
    accountId,
    requestBody,
  }: {
    accountId: number;
    requestBody: account_user_create_update_payload;
  }): CancelablePromise<{
    account_id?: number;
    user_id?: number;
    role?: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/platform/api/v1/accounts/{account_id}/account_users',
      path: {
        account_id: accountId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public deleteAnAccountUser({
    accountId,
  }: {
    accountId: number;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/platform/api/v1/accounts/{account_id}/account_users',
      path: {
        account_id: accountId,
      },
      errors: {
        401: `Unauthorized`,
        404: `The account does not exist`,
      },
    });
  }
}
