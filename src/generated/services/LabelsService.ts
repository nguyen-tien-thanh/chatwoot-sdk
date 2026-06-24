import type { label } from '../models/label';
import type { label_create_update_payload } from '../models/label_create_update_payload';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class LabelsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public listAllLabels({
    accountId,
  }: {
    accountId: number;
  }): CancelablePromise<{
    payload?: Array<label>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/labels',
      path: {
        account_id: accountId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public createALabel({
    accountId,
    requestBody,
  }: {
    accountId: number;
    requestBody: label_create_update_payload;
  }): CancelablePromise<label> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/labels',
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
  public getDetailsOfASingleLabel({
    accountId,
    id,
  }: {
    accountId: number;
    id: number;
  }): CancelablePromise<label> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/labels/{id}',
      path: {
        account_id: accountId,
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        404: `The given label ID does not exist in the account`,
      },
    });
  }
  public updateALabel({
    accountId,
    id,
    requestBody,
  }: {
    accountId: number;
    id: number;
    requestBody: label_create_update_payload;
  }): CancelablePromise<label> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/v1/accounts/{account_id}/labels/{id}',
      path: {
        account_id: accountId,
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public deleteALabel({
    accountId,
    id,
  }: {
    accountId: number;
    id: number;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/v1/accounts/{account_id}/labels/{id}',
      path: {
        account_id: accountId,
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        404: `The label does not exist in the account`,
      },
    });
  }
}
