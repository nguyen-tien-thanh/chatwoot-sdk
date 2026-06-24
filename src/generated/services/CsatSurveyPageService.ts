import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CsatSurveyPageService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public getCsatSurveyPage({
    conversationUuid,
  }: {
    conversationUuid: number;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/survey/responses/{conversation_uuid}',
      path: {
        conversation_uuid: conversationUuid,
      },
    });
  }
}
