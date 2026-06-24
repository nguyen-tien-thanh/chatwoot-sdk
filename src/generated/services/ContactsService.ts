import type { contact_base } from '../models/contact_base';
import type { contact_conversations_response } from '../models/contact_conversations_response';
import type { contact_create_payload } from '../models/contact_create_payload';
import type { contact_inboxes } from '../models/contact_inboxes';
import type { contact_show_response } from '../models/contact_show_response';
import type { contact_update_payload } from '../models/contact_update_payload';
import type { contactable_inboxes_response } from '../models/contactable_inboxes_response';
import type { contacts_list_response } from '../models/contacts_list_response';
import type { extended_contact } from '../models/extended_contact';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ContactsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public contactList({
    accountId,
    sort,
    page = 1,
  }: {
    accountId: number;
    sort?:
      | 'name'
      | 'email'
      | 'phone_number'
      | 'last_activity_at'
      | '-name'
      | '-email'
      | '-phone_number'
      | '-last_activity_at';
    page?: number;
  }): CancelablePromise<contacts_list_response> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/contacts',
      path: {
        account_id: accountId,
      },
      query: {
        sort: sort,
        page: page,
      },
      errors: {
        400: `Bad Request Error`,
      },
    });
  }
  public contactCreate({
    accountId,
    requestBody,
  }: {
    accountId: number;
    requestBody: contact_create_payload;
  }): CancelablePromise<extended_contact> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/contacts',
      path: {
        account_id: accountId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request Error`,
      },
    });
  }
  public contactDetails({
    accountId,
    id,
  }: {
    accountId: number;
    id: number;
  }): CancelablePromise<contact_show_response> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/contacts/{id}',
      path: {
        account_id: accountId,
        id: id,
      },
      errors: {
        403: `Access denied`,
        404: `Contact not found`,
      },
    });
  }
  public contactUpdate({
    accountId,
    id,
    requestBody,
  }: {
    accountId: number;
    id: number;
    requestBody: contact_update_payload;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/v1/accounts/{account_id}/contacts/{id}',
      path: {
        account_id: accountId,
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Access denied`,
        404: `Contact not found`,
      },
    });
  }
  public contactDelete({
    accountId,
    id,
  }: {
    accountId: number;
    id: number;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/v1/accounts/{account_id}/contacts/{id}',
      path: {
        account_id: accountId,
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        404: `Contact not found`,
      },
    });
  }
  public contactConversations({
    accountId,
    id,
  }: {
    accountId: number;
    id: number;
  }): CancelablePromise<contact_conversations_response> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/contacts/{id}/conversations',
      path: {
        account_id: accountId,
        id: id,
      },
      errors: {
        403: `Access denied`,
        404: `Contact not found`,
      },
    });
  }
  public contactSearch({
    accountId,
    q,
    sort,
    page = 1,
  }: {
    accountId: number;
    q?: string;
    sort?:
      | 'name'
      | 'email'
      | 'phone_number'
      | 'last_activity_at'
      | '-name'
      | '-email'
      | '-phone_number'
      | '-last_activity_at';
    page?: number;
  }): CancelablePromise<contacts_list_response> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/contacts/search',
      path: {
        account_id: accountId,
      },
      query: {
        q: q,
        sort: sort,
        page: page,
      },
      errors: {
        401: `Authentication error`,
      },
    });
  }
  public contactFilter({
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
  }): CancelablePromise<contacts_list_response> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/contacts/filter',
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
  public contactInboxCreation({
    accountId,
    id,
    requestBody,
  }: {
    accountId: number;
    id: number;
    requestBody: {
      inbox_id: number;
      source_id?: string;
    };
  }): CancelablePromise<contact_inboxes> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/contacts/{id}/contact_inboxes',
      path: {
        account_id: accountId,
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Authentication error`,
        422: `Incorrect payload`,
      },
    });
  }
  public contactableInboxesGet({
    accountId,
    id,
  }: {
    accountId: number;
    id: number;
  }): CancelablePromise<contactable_inboxes_response> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/contacts/{id}/contactable_inboxes',
      path: {
        account_id: accountId,
        id: id,
      },
      errors: {
        401: `Authentication error`,
        422: `Incorrect payload`,
      },
    });
  }
  public contactMerge({
    accountId,
    requestBody,
  }: {
    accountId: number;
    requestBody: {
      base_contact_id: number;
      mergee_contact_id: number;
    };
  }): CancelablePromise<contact_base> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/actions/contact_merge',
      path: {
        account_id: accountId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request - invalid contact IDs or contacts cannot be merged`,
        401: `Unauthorized`,
        404: `One or both contacts not found`,
      },
    });
  }
}
