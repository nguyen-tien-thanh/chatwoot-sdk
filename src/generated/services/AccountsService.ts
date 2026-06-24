import type { account_create_update_payload } from '../models/account_create_update_payload';
import type { platform_account } from '../models/platform_account';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AccountsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public createAnAccount({
    requestBody,
  }: {
    requestBody: account_create_update_payload;
  }): CancelablePromise<platform_account> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/platform/api/v1/accounts',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public getDetailsOfAnAccount({
    accountId,
  }: {
    accountId: number;
  }): CancelablePromise<platform_account> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/platform/api/v1/accounts/{account_id}',
      path: {
        account_id: accountId,
      },
      errors: {
        401: `Unauthorized`,
        404: `The given account does not exist`,
      },
    });
  }
  public updateAnAccount({
    accountId,
    requestBody,
  }: {
    accountId: number;
    requestBody: account_create_update_payload;
  }): CancelablePromise<platform_account> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/platform/api/v1/accounts/{account_id}',
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
  public deleteAnAccount({
    accountId,
  }: {
    accountId: number;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/platform/api/v1/accounts/{account_id}',
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
