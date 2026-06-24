import type { contact_labels } from '../models/contact_labels';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ContactLabelsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public listAllLabelsOfAContact({
    accountId,
    id,
  }: {
    accountId: number;
    id: number;
  }): CancelablePromise<contact_labels> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/contacts/{id}/labels',
      path: {
        account_id: accountId,
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        404: `Contact not found`,
      },
    });
  }
  public contactAddLabels({
    accountId,
    id,
    requestBody,
  }: {
    accountId: number;
    id: number;
    requestBody: {
      labels: Array<string>;
    };
  }): CancelablePromise<contact_labels> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/contacts/{id}/labels',
      path: {
        account_id: accountId,
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
        404: `Contact not found`,
      },
    });
  }
}
