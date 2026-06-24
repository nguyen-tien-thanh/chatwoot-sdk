import type { agent } from '../models/agent';
import type { contact } from '../models/contact';
import type { conversation_message_create_payload } from '../models/conversation_message_create_payload';
import type { generic_id } from '../models/generic_id';
import type { message } from '../models/message';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MessagesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public listAllMessages({
    accountId,
    conversationId,
    after,
    before,
  }: {
    accountId: number;
    conversationId: number;
    after?: number;
    before?: number;
  }): CancelablePromise<{
    meta?: {
      labels?: Array<string>;
      additional_attributes?: Record<string, any>;
      contact?: contact;
      assignee?: agent;
      agent_last_seen_at?: string | null;
      assignee_last_seen_at?: string | null;
    };
    payload?: Array<message>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/messages',
      path: {
        account_id: accountId,
        conversation_id: conversationId,
      },
      query: {
        after: after,
        before: before,
      },
      errors: {
        401: `Unauthorized`,
        404: `Conversation not found`,
      },
    });
  }
  public createANewMessageInAConversation({
    accountId,
    conversationId,
    requestBody,
  }: {
    accountId: number;
    conversationId: number;
    requestBody: conversation_message_create_payload;
  }): CancelablePromise<generic_id & message> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/messages',
      path: {
        account_id: accountId,
        conversation_id: conversationId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Access denied`,
        404: `Conversation not found`,
      },
    });
  }
  public deleteAMessage({
    accountId,
    conversationId,
    messageId,
  }: {
    accountId: number;
    conversationId: number;
    messageId: number;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/messages/{message_id}',
      path: {
        account_id: accountId,
        conversation_id: conversationId,
        message_id: messageId,
      },
      errors: {
        401: `Unauthorized`,
        404: `The message or conversation does not exist in the account`,
      },
    });
  }
}
