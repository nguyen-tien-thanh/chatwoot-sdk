import type { conversation } from '../models/conversation';
import type { conversation_create_payload } from '../models/conversation_create_payload';
import type { conversation_labels } from '../models/conversation_labels';
import type { conversation_list } from '../models/conversation_list';
import type { conversation_show } from '../models/conversation_show';
import type { reporting_event } from '../models/reporting_event';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ConversationsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public conversationListMeta({
    accountId,
    status = 'open',
    q,
    inboxId,
    teamId,
    labels,
  }: {
    accountId: number;
    status?: 'all' | 'open' | 'resolved' | 'pending' | 'snoozed';
    q?: string;
    inboxId?: number;
    teamId?: number;
    labels?: Array<string>;
  }): CancelablePromise<{
    meta?: {
      mine_count?: number;
      unassigned_count?: number;
      assigned_count?: number;
      all_count?: number;
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/conversations/meta',
      path: {
        account_id: accountId,
      },
      query: {
        status: status,
        q: q,
        inbox_id: inboxId,
        team_id: teamId,
        labels: labels,
      },
      errors: {
        400: `Bad Request Error`,
      },
    });
  }
  public conversationList({
    accountId,
    assigneeType = 'all',
    status = 'open',
    q,
    inboxId,
    teamId,
    labels,
    page = 1,
  }: {
    accountId: number;
    assigneeType?: 'me' | 'unassigned' | 'all' | 'assigned';
    status?: 'all' | 'open' | 'resolved' | 'pending' | 'snoozed';
    q?: string;
    inboxId?: number;
    teamId?: number;
    labels?: Array<string>;
    page?: number;
  }): CancelablePromise<conversation_list> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/conversations',
      path: {
        account_id: accountId,
      },
      query: {
        assignee_type: assigneeType,
        status: status,
        q: q,
        inbox_id: inboxId,
        team_id: teamId,
        labels: labels,
        page: page,
      },
      errors: {
        400: `Bad Request Error`,
      },
    });
  }
  public newConversation({
    accountId,
    requestBody,
  }: {
    accountId: number;
    requestBody: conversation_create_payload;
  }): CancelablePromise<{
    id?: number;
    account_id?: number;
    inbox_id?: number;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/conversations',
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
  public conversationFilter({
    accountId,
    requestBody,
    page,
  }: {
    accountId: number;
    requestBody: {
      payload?: Array<{
        attribute_key?: string;
        filter_operator?:
          | 'equal_to'
          | 'not_equal_to'
          | 'contains'
          | 'does_not_contain';
        values?: Array<string>;
        query_operator?: 'AND' | 'OR';
      }>;
    };
    page?: number;
  }): CancelablePromise<conversation_list> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/conversations/filter',
      path: {
        account_id: accountId,
      },
      query: {
        page: page,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request Error`,
      },
    });
  }
  public getDetailsOfAConversation({
    accountId,
    conversationId,
  }: {
    accountId: number;
    conversationId: number;
  }): CancelablePromise<conversation_show> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/conversations/{conversation_id}',
      path: {
        account_id: accountId,
        conversation_id: conversationId,
      },
      errors: {
        403: `Access denied`,
        404: `Conversation not found`,
      },
    });
  }
  public updateConversation({
    accountId,
    conversationId,
    requestBody,
  }: {
    accountId: number;
    conversationId: number;
    requestBody: {
      priority?: 'urgent' | 'high' | 'medium' | 'low' | 'none';
      sla_policy_id?: number;
    };
  }): CancelablePromise<conversation> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/v1/accounts/{account_id}/conversations/{conversation_id}',
      path: {
        account_id: accountId,
        conversation_id: conversationId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
        404: `Conversation not found`,
      },
    });
  }
  public toggleStatusOfAConversation({
    accountId,
    conversationId,
    requestBody,
  }: {
    accountId: number;
    conversationId: number;
    requestBody: {
      status: 'open' | 'resolved' | 'pending' | 'snoozed';
      snoozed_until?: number;
    };
  }): CancelablePromise<{
    meta?: Record<string, any>;
    payload?: {
      success?: boolean;
      current_status?: 'open' | 'resolved' | 'pending' | 'snoozed';
      conversation_id?: number;
    };
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_status',
      path: {
        account_id: accountId,
        conversation_id: conversationId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
        404: `Conversation not found`,
      },
    });
  }
  public togglePriorityOfAConversation({
    accountId,
    conversationId,
    requestBody,
  }: {
    accountId: number;
    conversationId: number;
    requestBody: {
      priority: 'urgent' | 'high' | 'medium' | 'low' | 'none';
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_priority',
      path: {
        account_id: accountId,
        conversation_id: conversationId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
        404: `Conversation not found`,
      },
    });
  }
  public toggleTypingStatusOfAConversation({
    accountId,
    conversationId,
    requestBody,
  }: {
    accountId: number;
    conversationId: number;
    requestBody: {
      typing_status: 'on' | 'off';
      is_private?: boolean;
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_typing_status',
      path: {
        account_id: accountId,
        conversation_id: conversationId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
        404: `Conversation not found`,
      },
    });
  }
  public updateCustomAttributesOfAConversation({
    accountId,
    conversationId,
    requestBody,
  }: {
    accountId: number;
    conversationId: number;
    requestBody: {
      custom_attributes: Record<string, any>;
    };
  }): CancelablePromise<{
    custom_attributes?: Record<string, any>;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/custom_attributes',
      path: {
        account_id: accountId,
        conversation_id: conversationId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
        404: `Conversation not found`,
      },
    });
  }
  public listAllLabelsOfAConversation({
    accountId,
    conversationId,
  }: {
    accountId: number;
    conversationId: number;
  }): CancelablePromise<conversation_labels> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/labels',
      path: {
        account_id: accountId,
        conversation_id: conversationId,
      },
      errors: {
        401: `Unauthorized`,
        404: `Conversation not found`,
      },
    });
  }
  public conversationAddLabels({
    accountId,
    conversationId,
    requestBody,
  }: {
    accountId: number;
    conversationId: number;
    requestBody: {
      labels: Array<string>;
    };
  }): CancelablePromise<conversation_labels> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/labels',
      path: {
        account_id: accountId,
        conversation_id: conversationId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
        404: `Conversation not found`,
      },
    });
  }
  public getConversationReportingEvents({
    accountId,
    conversationId,
  }: {
    accountId: number;
    conversationId: number;
  }): CancelablePromise<Array<reporting_event>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/reporting_events',
      path: {
        account_id: accountId,
        conversation_id: conversationId,
      },
      errors: {
        403: `Access denied`,
        404: `Conversation not found`,
      },
    });
  }
}
