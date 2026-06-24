import type { public_inbox } from '../models/public_inbox';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class InboxApiService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public getDetailsOfAInbox({
    inboxIdentifier,
  }: {
    inboxIdentifier: string;
  }): CancelablePromise<public_inbox> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/public/api/v1/inboxes/{inbox_identifier}',
      path: {
        inbox_identifier: inboxIdentifier,
      },
      errors: {
        401: `Unauthorized`,
        404: `The given inbox does not exist`,
      },
    });
  }
}
