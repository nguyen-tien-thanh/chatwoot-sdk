import type { agent } from '../models/agent';
import type { inbox } from '../models/inbox';
import type { inbox_create_payload } from '../models/inbox_create_payload';
import type { inbox_update_payload } from '../models/inbox_update_payload';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class InboxesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public listAllInboxes({
    accountId,
  }: {
    accountId: number;
  }): CancelablePromise<{
    payload?: Array<inbox>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/inboxes',
      path: {
        account_id: accountId,
      },
      errors: {
        403: `Access denied`,
        404: `Inbox not found`,
      },
    });
  }
  public inboxCreation({
    accountId,
    requestBody,
  }: {
    accountId: number;
    requestBody: inbox_create_payload;
  }): CancelablePromise<inbox> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/inboxes',
      path: {
        account_id: accountId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Access denied`,
        404: `Inbox not found`,
      },
    });
  }
  public getInbox({
    accountId,
    id,
  }: {
    accountId: number;
    id: number;
  }): CancelablePromise<inbox> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/inboxes/{id}',
      path: {
        account_id: accountId,
        id: id,
      },
      errors: {
        403: `Access denied`,
        404: `Inbox not found`,
      },
    });
  }
  public updateInbox({
    accountId,
    id,
    requestBody,
  }: {
    accountId: number;
    id: number;
    requestBody: inbox_update_payload;
  }): CancelablePromise<inbox> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/v1/accounts/{account_id}/inboxes/{id}',
      path: {
        account_id: accountId,
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Access denied`,
        404: `Inbox not found`,
      },
    });
  }
  public getInboxAgentBot({
    accountId,
    id,
  }: {
    accountId: number;
    id: number;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/inboxes/{id}/agent_bot',
      path: {
        account_id: accountId,
        id: id,
      },
      errors: {
        403: `Access denied`,
        404: `Inbox not found, Agent bot not found`,
      },
    });
  }
  public updateAgentBot({
    accountId,
    id,
    requestBody,
  }: {
    accountId: number;
    id: number;
    requestBody: {
      agent_bot: number;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/inboxes/{id}/set_agent_bot',
      path: {
        account_id: accountId,
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Access denied`,
        404: `Inbox not found, Agent bot not found`,
      },
    });
  }
  public getInboxMembers({
    accountId,
    inboxId,
  }: {
    accountId: number;
    inboxId: number;
  }): CancelablePromise<{
    payload?: Array<agent>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/inbox_members/{inbox_id}',
      path: {
        account_id: accountId,
        inbox_id: inboxId,
      },
      errors: {
        403: `Access denied`,
        404: `Inbox not found`,
      },
    });
  }
  public addNewAgentToInbox({
    accountId,
    requestBody,
  }: {
    accountId: number;
    requestBody: {
      inbox_id: number;
      user_ids: Array<number>;
    };
  }): CancelablePromise<{
    payload?: Array<agent>;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/inbox_members',
      path: {
        account_id: accountId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Access denied`,
        404: `Inbox not found`,
        422: `User must exist`,
      },
    });
  }
  public updateAgentsInInbox({
    accountId,
    requestBody,
  }: {
    accountId: number;
    requestBody: {
      inbox_id: string;
      user_ids: Array<number>;
    };
  }): CancelablePromise<{
    payload?: Array<agent>;
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/v1/accounts/{account_id}/inbox_members',
      path: {
        account_id: accountId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Access denied`,
        404: `Inbox not found`,
        422: `User must exist`,
      },
    });
  }
  public deleteAgentInInbox({
    accountId,
    requestBody,
  }: {
    accountId: number;
    requestBody: {
      inbox_id: string;
      user_ids: Array<number>;
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/v1/accounts/{account_id}/inbox_members',
      path: {
        account_id: accountId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Access denied`,
        404: `Inbox not found`,
        422: `User must exist`,
      },
    });
  }
}
