import type { public_message } from '../models/public_message';
import type { public_message_create_payload } from '../models/public_message_create_payload';
import type { public_message_update_payload } from '../models/public_message_update_payload';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MessagesApiService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public createAMessage({
    inboxIdentifier,
    contactIdentifier,
    conversationId,
    requestBody,
  }: {
    inboxIdentifier: string;
    contactIdentifier: string;
    conversationId: number;
    requestBody: public_message_create_payload;
  }): CancelablePromise<public_message> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages',
      path: {
        inbox_identifier: inboxIdentifier,
        contact_identifier: contactIdentifier,
        conversation_id: conversationId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public listAllConversationMessages({
    inboxIdentifier,
    contactIdentifier,
    conversationId,
  }: {
    inboxIdentifier: string;
    contactIdentifier: string;
    conversationId: number;
  }): CancelablePromise<Array<public_message>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages',
      path: {
        inbox_identifier: inboxIdentifier,
        contact_identifier: contactIdentifier,
        conversation_id: conversationId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public updateAMessage({
    inboxIdentifier,
    contactIdentifier,
    conversationId,
    messageId,
    requestBody,
  }: {
    inboxIdentifier: string;
    contactIdentifier: string;
    conversationId: number;
    messageId: number;
    requestBody: public_message_update_payload;
  }): CancelablePromise<public_message> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages/{message_id}',
      path: {
        inbox_identifier: inboxIdentifier,
        contact_identifier: contactIdentifier,
        conversation_id: conversationId,
        message_id: messageId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
