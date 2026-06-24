import type { user } from '../models/user';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProfileService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public fetchProfile(): CancelablePromise<user> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/profile',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public updateProfile({
    requestBody,
  }: {
    requestBody: {
      profile: {
        name?: string;
        email?: string;
        display_name?: string;
        message_signature?: string;
        phone_number?: string;
        current_password?: string;
        password?: string;
        password_confirmation?: string;
        ui_settings?: Record<string, any>;
      };
    };
  }): CancelablePromise<user> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/v1/profile',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
