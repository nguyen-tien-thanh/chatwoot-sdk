import type { agent_bot } from '../models/agent_bot';
import type { platform_agent_bot_create_update_payload } from '../models/platform_agent_bot_create_update_payload';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AgentBotsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public listAllAgentBots(): CancelablePromise<Array<agent_bot>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/platform/api/v1/agent_bots',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public createAnAgentBot({
    requestBody,
  }: {
    requestBody: platform_agent_bot_create_update_payload;
  }): CancelablePromise<agent_bot> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/platform/api/v1/agent_bots',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public getDetailsOfASingleAgentBot({
    id,
  }: {
    id: number;
  }): CancelablePromise<agent_bot> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/platform/api/v1/agent_bots/{id}',
      path: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        404: `The given agent bot ID does not exist`,
      },
    });
  }
  public updateAnAgentBot({
    id,
    requestBody,
  }: {
    id: number;
    requestBody: platform_agent_bot_create_update_payload;
  }): CancelablePromise<agent_bot> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/platform/api/v1/agent_bots/{id}',
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
  public deleteAnAgentBot({ id }: { id: number }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/platform/api/v1/agent_bots/{id}',
      path: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        404: `The agent bot does not exist`,
      },
    });
  }
}
