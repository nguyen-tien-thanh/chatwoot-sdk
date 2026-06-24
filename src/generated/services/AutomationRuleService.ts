import type { automation_rule } from '../models/automation_rule';
import type { automation_rule_create_update_payload } from '../models/automation_rule_create_update_payload';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AutomationRuleService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public getAccountAutomationRule({
    accountId,
    page = 1,
  }: {
    accountId: number;
    page?: number;
  }): CancelablePromise<automation_rule> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/automation_rules',
      path: {
        account_id: accountId,
      },
      query: {
        page: page,
      },
      errors: {
        403: `Access denied`,
      },
    });
  }
  public addNewAutomationRuleToAccount({
    accountId,
    requestBody,
  }: {
    accountId: number;
    requestBody: automation_rule_create_update_payload;
  }): CancelablePromise<automation_rule> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/automation_rules',
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
  public getDetailsOfASingleAutomationRule({
    accountId,
    id,
  }: {
    accountId: number;
    id: number;
  }): CancelablePromise<automation_rule> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/automation_rules/{id}',
      path: {
        account_id: accountId,
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        404: `The given rule ID does not exist in the account`,
      },
    });
  }
  public updateAutomationRuleInAccount({
    accountId,
    id,
    requestBody,
  }: {
    accountId: number;
    id: number;
    requestBody: automation_rule_create_update_payload;
  }): CancelablePromise<automation_rule> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/v1/accounts/{account_id}/automation_rules/{id}',
      path: {
        account_id: accountId,
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Access denied`,
        404: `Rule not found`,
      },
    });
  }
  public deleteAutomationRuleFromAccount({
    accountId,
    id,
  }: {
    accountId: number;
    id: number;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/v1/accounts/{account_id}/automation_rules/{id}',
      path: {
        account_id: accountId,
        id: id,
      },
      errors: {
        403: `Access denied`,
        404: `automation rule not found`,
      },
    });
  }
}
