import type { canned_response } from '../models/canned_response';
import type { canned_response_create_update_payload } from '../models/canned_response_create_update_payload';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CannedResponsesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public getAccountCannedResponse({
    accountId,
  }: {
    accountId: number;
  }): CancelablePromise<Array<canned_response>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/canned_responses',
      path: {
        account_id: accountId,
      },
      errors: {
        403: `Access denied`,
      },
    });
  }
  public addNewCannedResponseToAccount({
    accountId,
    requestBody,
  }: {
    accountId: number;
    requestBody: canned_response_create_update_payload;
  }): CancelablePromise<canned_response> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/canned_responses',
      path: {
        account_id: accountId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Access denied`,
      },
    });
  }
  public updateCannedResponseInAccount({
    accountId,
    id,
    requestBody,
  }: {
    accountId: number;
    id: number;
    requestBody: canned_response_create_update_payload;
  }): CancelablePromise<canned_response> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/v1/accounts/{account_id}/canned_responses/{id}',
      path: {
        account_id: accountId,
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Access denied`,
        404: `Agent not found`,
      },
    });
  }
  public deleteCannedResponseFromAccount({
    accountId,
    id,
  }: {
    accountId: number;
    id: number;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/v1/accounts/{account_id}/canned_responses/{id}',
      path: {
        account_id: accountId,
        id: id,
      },
      errors: {
        403: `Access denied`,
        404: `Canned Response not found`,
      },
    });
  }
}
