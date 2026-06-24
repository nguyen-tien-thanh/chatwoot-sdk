import type { webhook } from '../models/webhook';
import type { webhook_create_update_payload } from '../models/webhook_create_update_payload';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WebhooksService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public listAllWebhooks({
    accountId,
  }: {
    accountId: number;
  }): CancelablePromise<Array<webhook>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/webhooks',
      path: {
        account_id: accountId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public createAWebhook({
    accountId,
    requestBody,
  }: {
    accountId: number;
    requestBody: webhook_create_update_payload;
  }): CancelablePromise<webhook> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/webhooks',
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
  public updateAWebhook({
    accountId,
    webhookId,
    requestBody,
  }: {
    accountId: number;
    webhookId: number;
    requestBody: webhook_create_update_payload;
  }): CancelablePromise<webhook> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/v1/accounts/{account_id}/webhooks/{webhook_id}',
      path: {
        account_id: accountId,
        webhook_id: webhookId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public deleteAWebhook({
    accountId,
    webhookId,
  }: {
    accountId: number;
    webhookId: number;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/v1/accounts/{account_id}/webhooks/{webhook_id}',
      path: {
        account_id: accountId,
        webhook_id: webhookId,
      },
      errors: {
        401: `Unauthorized`,
        404: `The webhook does not exist in the account`,
      },
    });
  }
}
