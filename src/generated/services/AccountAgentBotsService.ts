import type { agent_bot } from '../models/agent_bot';
import type { agent_bot_create_update_payload } from '../models/agent_bot_create_update_payload';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AccountAgentBotsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public listAllAccountAgentBots({
    accountId,
  }: {
    accountId: number;
  }): CancelablePromise<Array<agent_bot>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/agent_bots',
      path: {
        account_id: accountId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public createAnAccountAgentBot({
    accountId,
    requestBody,
  }: {
    accountId: number;
    requestBody: agent_bot_create_update_payload;
  }): CancelablePromise<agent_bot> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/agent_bots',
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
  public getDetailsOfASingleAccountAgentBot({
    accountId,
    id,
  }: {
    accountId: number;
    id: number;
  }): CancelablePromise<agent_bot> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/agent_bots/{id}',
      path: {
        account_id: accountId,
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        404: `The given agent bot ID does not exist in the account`,
      },
    });
  }
  public updateAnAccountAgentBot({
    accountId,
    id,
    requestBody,
  }: {
    accountId: number;
    id: number;
    requestBody: agent_bot_create_update_payload;
  }): CancelablePromise<agent_bot> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/v1/accounts/{account_id}/agent_bots/{id}',
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
  public deleteAnAccountAgentBot({
    accountId,
    id,
  }: {
    accountId: number;
    id: number;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/v1/accounts/{account_id}/agent_bots/{id}',
      path: {
        account_id: accountId,
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        404: `The agent bot does not exist in the account`,
      },
    });
  }
}
