import type { user } from '../models/user';
import type { user_create_update_payload } from '../models/user_create_update_payload';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UsersService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public createAUser({
    requestBody,
  }: {
    requestBody: user_create_update_payload;
  }): CancelablePromise<user> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/platform/api/v1/users',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public getDetailsOfAUser({ id }: { id: number }): CancelablePromise<user> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/platform/api/v1/users/{id}',
      path: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        404: `The given user does not exist`,
      },
    });
  }
  public updateAUser({
    id,
    requestBody,
  }: {
    id: number;
    requestBody: user_create_update_payload;
  }): CancelablePromise<user> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/platform/api/v1/users/{id}',
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public deleteAUser({ id }: { id: number }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/platform/api/v1/users/{id}',
      path: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        404: `The user does not exist`,
      },
    });
  }
  public getSsoUrlOfAUser({ id }: { id: number }): CancelablePromise<{
    url?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/platform/api/v1/users/{id}/login',
      path: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        404: `The given user does not exist`,
      },
    });
  }
}
