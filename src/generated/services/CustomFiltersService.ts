import type { custom_filter } from '../models/custom_filter';
import type { custom_filter_create_update_payload } from '../models/custom_filter_create_update_payload';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CustomFiltersService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public listAllFilters({
    accountId,
    filterType,
  }: {
    accountId: number;
    filterType?: 'conversation' | 'contact' | 'report';
  }): CancelablePromise<Array<custom_filter>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/custom_filters',
      path: {
        account_id: accountId,
      },
      query: {
        filter_type: filterType,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public createACustomFilter({
    accountId,
    requestBody,
    filterType,
  }: {
    accountId: number;
    requestBody: custom_filter_create_update_payload;
    filterType?: 'conversation' | 'contact' | 'report';
  }): CancelablePromise<custom_filter> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/custom_filters',
      path: {
        account_id: accountId,
      },
      query: {
        filter_type: filterType,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public getDetailsOfASingleCustomFilter({
    accountId,
    customFilterId,
  }: {
    accountId: number;
    customFilterId: number;
  }): CancelablePromise<custom_filter> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}',
      path: {
        account_id: accountId,
        custom_filter_id: customFilterId,
      },
      errors: {
        401: `Unauthorized`,
        404: `The given team ID does not exist in the account`,
      },
    });
  }
  public updateACustomFilter({
    accountId,
    customFilterId,
    requestBody,
  }: {
    accountId: number;
    customFilterId: number;
    requestBody: custom_filter_create_update_payload;
  }): CancelablePromise<custom_filter> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}',
      path: {
        account_id: accountId,
        custom_filter_id: customFilterId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public deleteACustomFilter({
    accountId,
    customFilterId,
  }: {
    accountId: number;
    customFilterId: number;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}',
      path: {
        account_id: accountId,
        custom_filter_id: customFilterId,
      },
      errors: {
        401: `Unauthorized`,
        404: `The custom filter does not exist in the account`,
      },
    });
  }
}
