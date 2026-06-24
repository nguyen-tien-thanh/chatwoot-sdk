import type { custom_attribute } from '../models/custom_attribute';
import type { custom_attribute_create_update_payload } from '../models/custom_attribute_create_update_payload';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CustomAttributesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public getAccountCustomAttribute({
    accountId,
    attributeModel,
  }: {
    accountId: number;
    attributeModel: '0' | '1';
  }): CancelablePromise<Array<custom_attribute>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/custom_attribute_definitions',
      path: {
        account_id: accountId,
      },
      query: {
        attribute_model: attributeModel,
      },
      errors: {
        403: `Access denied`,
      },
    });
  }
  public addNewCustomAttributeToAccount({
    accountId,
    requestBody,
  }: {
    accountId: number;
    requestBody: custom_attribute_create_update_payload;
  }): CancelablePromise<custom_attribute> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/custom_attribute_definitions',
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
  public getDetailsOfASingleCustomAttribute({
    accountId,
    id,
  }: {
    accountId: number;
    id: number;
  }): CancelablePromise<custom_attribute> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/custom_attribute_definitions/{id}',
      path: {
        account_id: accountId,
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        404: `The given attribute ID does not exist in the account`,
      },
    });
  }
  public updateCustomAttributeInAccount({
    accountId,
    id,
    requestBody,
  }: {
    accountId: number;
    id: number;
    requestBody: custom_attribute_create_update_payload;
  }): CancelablePromise<custom_attribute> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/v1/accounts/{account_id}/custom_attribute_definitions/{id}',
      path: {
        account_id: accountId,
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Access denied`,
        404: `Agent not found`,
      },
    });
  }
  public deleteCustomAttributeFromAccount({
    accountId,
    id,
  }: {
    accountId: number;
    id: number;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/v1/accounts/{account_id}/custom_attribute_definitions/{id}',
      path: {
        account_id: accountId,
        id: id,
      },
      errors: {
        403: `Access denied`,
        404: `Custom attribute not found`,
      },
    });
  }
}
