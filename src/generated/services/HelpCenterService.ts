import type { article } from '../models/article';
import type { article_create_update_payload } from '../models/article_create_update_payload';
import type { category } from '../models/category';
import type { category_create_update_payload } from '../models/category_create_update_payload';
import type { portal } from '../models/portal';
import type { portal_create_update_payload } from '../models/portal_create_update_payload';
import type { portal_single } from '../models/portal_single';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class HelpCenterService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public addNewPortalToAccount({
    accountId,
    requestBody,
  }: {
    accountId: number;
    requestBody: portal_create_update_payload;
  }): CancelablePromise<portal> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/portals',
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
  public getPortal({
    accountId,
  }: {
    accountId: number;
  }): CancelablePromise<portal> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/portals',
      path: {
        account_id: accountId,
      },
      errors: {
        403: `Access denied`,
      },
    });
  }
  public updatePortalToAccount({
    accountId,
    id,
    requestBody,
  }: {
    accountId: number;
    id: string;
    requestBody: portal_create_update_payload;
  }): CancelablePromise<portal_single> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/v1/accounts/{account_id}/portals/{id}',
      path: {
        account_id: accountId,
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Access denied`,
        404: `Portal not found`,
      },
    });
  }
  public addNewCategoryToAccount({
    accountId,
    id,
    requestBody,
  }: {
    accountId: number;
    id: string;
    requestBody: category_create_update_payload;
  }): CancelablePromise<category> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/portals/{id}/categories',
      path: {
        account_id: accountId,
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Access denied`,
      },
    });
  }
  public addNewArticleToAccount({
    accountId,
    id,
    requestBody,
  }: {
    accountId: number;
    id: string;
    requestBody: article_create_update_payload;
  }): CancelablePromise<article> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/portals/{id}/articles',
      path: {
        account_id: accountId,
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Access denied`,
      },
    });
  }
}
