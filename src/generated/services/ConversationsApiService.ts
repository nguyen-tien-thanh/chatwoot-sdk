import type { public_conversation } from '../models/public_conversation';
import type { public_conversation_create_payload } from '../models/public_conversation_create_payload';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ConversationsApiService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public createAConversation({
    inboxIdentifier,
    contactIdentifier,
    requestBody,
  }: {
    inboxIdentifier: string;
    contactIdentifier: string;
    requestBody: public_conversation_create_payload;
  }): CancelablePromise<public_conversation> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations',
      path: {
        inbox_identifier: inboxIdentifier,
        contact_identifier: contactIdentifier,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public listAllContactConversations({
    inboxIdentifier,
    contactIdentifier,
  }: {
    inboxIdentifier: string;
    contactIdentifier: string;
  }): CancelablePromise<Array<public_conversation>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations',
      path: {
        inbox_identifier: inboxIdentifier,
        contact_identifier: contactIdentifier,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public getSingleConversation({
    inboxIdentifier,
    contactIdentifier,
    conversationId,
  }: {
    inboxIdentifier: string;
    contactIdentifier: string;
    conversationId: number;
  }): CancelablePromise<public_conversation> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}',
      path: {
        inbox_identifier: inboxIdentifier,
        contact_identifier: contactIdentifier,
        conversation_id: conversationId,
      },
      errors: {
        401: `Unauthorized`,
        404: `Conversation not found`,
      },
    });
  }
  public resolveConversation({
    inboxIdentifier,
    contactIdentifier,
    conversationId,
  }: {
    inboxIdentifier: string;
    contactIdentifier: string;
    conversationId: number;
  }): CancelablePromise<public_conversation> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/toggle_status',
      path: {
        inbox_identifier: inboxIdentifier,
        contact_identifier: contactIdentifier,
        conversation_id: conversationId,
      },
      errors: {
        401: `Unauthorized`,
        404: `Conversation not found`,
      },
    });
  }
  public toggleTypingStatus({
    inboxIdentifier,
    contactIdentifier,
    conversationId,
    typingStatus,
    requestBody,
  }: {
    inboxIdentifier: string;
    contactIdentifier: string;
    conversationId: number;
    typingStatus: string;
    requestBody: {
      typing_status?: 'on' | 'off';
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/toggle_typing',
      path: {
        inbox_identifier: inboxIdentifier,
        contact_identifier: contactIdentifier,
        conversation_id: conversationId,
      },
      query: {
        typing_status: typingStatus,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
        404: `Conversation not found`,
      },
    });
  }
  public updateLastSeen({
    inboxIdentifier,
    contactIdentifier,
    conversationId,
  }: {
    inboxIdentifier: string;
    contactIdentifier: string;
    conversationId: number;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/update_last_seen',
      path: {
        inbox_identifier: inboxIdentifier,
        contact_identifier: contactIdentifier,
        conversation_id: conversationId,
      },
      errors: {
        401: `Unauthorized`,
        404: `Conversation not found`,
      },
    });
  }
}
