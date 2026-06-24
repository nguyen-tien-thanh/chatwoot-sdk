import type { integrations_app } from '../models/integrations_app';
import type { integrations_hook } from '../models/integrations_hook';
import type { integrations_hook_create_payload } from '../models/integrations_hook_create_payload';
import type { integrations_hook_update_payload } from '../models/integrations_hook_update_payload';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class IntegrationsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public getDetailsOfAllIntegrations({
    accountId,
  }: {
    accountId: number;
  }): CancelablePromise<{
    payload?: Array<integrations_app>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/integrations/apps',
      path: {
        account_id: accountId,
      },
      errors: {
        401: `Unauthorized`,
        404: `Url not found`,
      },
    });
  }
  public createAnIntegrationHook({
    accountId,
    requestBody,
  }: {
    accountId: number;
    requestBody: integrations_hook_create_payload;
  }): CancelablePromise<integrations_hook> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/integrations/hooks',
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
  public updateAnIntegrationsHook({
    accountId,
    hookId,
    requestBody,
  }: {
    accountId: number;
    hookId: number;
    requestBody: integrations_hook_update_payload;
  }): CancelablePromise<integrations_hook> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/v1/accounts/{account_id}/integrations/hooks/{hook_id}',
      path: {
        account_id: accountId,
        hook_id: hookId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public deleteAnIntegrationHook({
    accountId,
    hookId,
  }: {
    accountId: number;
    hookId: number;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/v1/accounts/{account_id}/integrations/hooks/{hook_id}',
      path: {
        account_id: accountId,
        hook_id: hookId,
      },
      errors: {
        401: `Unauthorized`,
        404: `The hook does not exist in the account`,
      },
    });
  }
}
