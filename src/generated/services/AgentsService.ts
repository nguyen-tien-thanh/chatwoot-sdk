import type { agent } from '../models/agent';
import type { agent_create_payload } from '../models/agent_create_payload';
import type { agent_update_payload } from '../models/agent_update_payload';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AgentsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public getAccountAgents({
    accountId,
  }: {
    accountId: number;
  }): CancelablePromise<Array<agent>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/agents',
      path: {
        account_id: accountId,
      },
      errors: {
        403: `Access denied`,
      },
    });
  }
  public addNewAgentToAccount({
    accountId,
    requestBody,
  }: {
    accountId: number;
    requestBody: agent_create_payload;
  }): CancelablePromise<agent> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/agents',
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
  public updateAgentInAccount({
    accountId,
    id,
    requestBody,
  }: {
    accountId: number;
    id: number;
    requestBody: agent_update_payload;
  }): CancelablePromise<agent> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/v1/accounts/{account_id}/agents/{id}',
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
  public deleteAgentFromAccount({
    accountId,
    id,
  }: {
    accountId: number;
    id: number;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/v1/accounts/{account_id}/agents/{id}',
      path: {
        account_id: accountId,
        id: id,
      },
      errors: {
        403: `Access denied`,
        404: `Agent not found`,
      },
    });
  }
}
