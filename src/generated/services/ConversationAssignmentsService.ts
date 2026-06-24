import type { user } from '../models/user';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ConversationAssignmentsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public assignAConversation({
    accountId,
    conversationId,
    requestBody,
  }: {
    accountId: number;
    conversationId: number;
    requestBody: {
      assignee_id?: number;
      team_id?: number;
    };
  }): CancelablePromise<user> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/conversations/{conversation_id}/assignments',
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
}
