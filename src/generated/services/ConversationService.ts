import type { conversation_messages } from '../models/conversation_messages';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ConversationService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public getConversationMessages({
    accountId,
    conversationId,
  }: {
    accountId: number;
    conversationId: number;
  }): CancelablePromise<conversation_messages> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/messages',
      path: {
        account_id: accountId,
        conversation_id: conversationId,
      },
    });
  }
}
