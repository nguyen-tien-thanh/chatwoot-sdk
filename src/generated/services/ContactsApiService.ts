import type { public_contact } from '../models/public_contact';
import type { public_contact_create_update_payload } from '../models/public_contact_create_update_payload';
import type { public_contact_record } from '../models/public_contact_record';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ContactsApiService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public createAContact({
    inboxIdentifier,
    requestBody,
  }: {
    inboxIdentifier: string;
    requestBody: public_contact_create_update_payload;
  }): CancelablePromise<public_contact> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/public/api/v1/inboxes/{inbox_identifier}/contacts',
      path: {
        inbox_identifier: inboxIdentifier,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public getDetailsOfAContact({
    inboxIdentifier,
    contactIdentifier,
  }: {
    inboxIdentifier: string;
    contactIdentifier: string;
  }): CancelablePromise<public_contact> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}',
      path: {
        inbox_identifier: inboxIdentifier,
        contact_identifier: contactIdentifier,
      },
      errors: {
        401: `Unauthorized`,
        404: `The given contact does not exist`,
      },
    });
  }
  public updateAContact({
    inboxIdentifier,
    contactIdentifier,
    requestBody,
  }: {
    inboxIdentifier: string;
    contactIdentifier: string;
    requestBody: public_contact_create_update_payload;
  }): CancelablePromise<public_contact_record> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}',
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
}
