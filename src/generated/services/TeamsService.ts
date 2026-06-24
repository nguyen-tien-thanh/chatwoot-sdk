import type { agent } from '../models/agent';
import type { team } from '../models/team';
import type { team_create_update_payload } from '../models/team_create_update_payload';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TeamsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public listAllTeams({
    accountId,
  }: {
    accountId: number;
  }): CancelablePromise<Array<team>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/teams',
      path: {
        account_id: accountId,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public createATeam({
    accountId,
    requestBody,
  }: {
    accountId: number;
    requestBody: team_create_update_payload;
  }): CancelablePromise<team> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/teams',
      path: {
        account_id: accountId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public getDetailsOfASingleTeam({
    accountId,
    teamId,
  }: {
    accountId: number;
    teamId: number;
  }): CancelablePromise<team> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/teams/{team_id}',
      path: {
        account_id: accountId,
        team_id: teamId,
      },
      errors: {
        401: `Unauthorized`,
        404: `The given team ID does not exist in the account`,
      },
    });
  }
  public updateATeam({
    accountId,
    teamId,
    requestBody,
  }: {
    accountId: number;
    teamId: number;
    requestBody: team_create_update_payload;
  }): CancelablePromise<team> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/v1/accounts/{account_id}/teams/{team_id}',
      path: {
        account_id: accountId,
        team_id: teamId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
  public deleteATeam({
    accountId,
    teamId,
  }: {
    accountId: number;
    teamId: number;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/v1/accounts/{account_id}/teams/{team_id}',
      path: {
        account_id: accountId,
        team_id: teamId,
      },
      errors: {
        401: `Unauthorized`,
        404: `The team does not exist in the account`,
      },
    });
  }
  public getTeamMembers({
    accountId,
    teamId,
  }: {
    accountId: number;
    teamId: number;
  }): CancelablePromise<Array<agent>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/teams/{team_id}/team_members',
      path: {
        account_id: accountId,
        team_id: teamId,
      },
      errors: {
        403: `Access denied`,
        404: `Team not found`,
      },
    });
  }
  public addNewAgentToTeam({
    accountId,
    teamId,
    requestBody,
  }: {
    accountId: number;
    teamId: number;
    requestBody: {
      user_ids: Array<number>;
    };
  }): CancelablePromise<Array<agent>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/accounts/{account_id}/teams/{team_id}/team_members',
      path: {
        account_id: accountId,
        team_id: teamId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Access denied`,
        404: `Team not found`,
        422: `User must exist`,
      },
    });
  }
  public updateAgentsInTeam({
    accountId,
    teamId,
    requestBody,
  }: {
    accountId: number;
    teamId: number;
    requestBody: {
      user_ids: Array<number>;
    };
  }): CancelablePromise<Array<agent>> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/v1/accounts/{account_id}/teams/{team_id}/team_members',
      path: {
        account_id: accountId,
        team_id: teamId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Access denied`,
        404: `Team not found`,
        422: `User must exist`,
      },
    });
  }
  public deleteAgentInTeam({
    accountId,
    teamId,
    requestBody,
  }: {
    accountId: number;
    teamId: number;
    requestBody: {
      user_ids: Array<number>;
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/v1/accounts/{account_id}/teams/{team_id}/team_members',
      path: {
        account_id: accountId,
        team_id: teamId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Access denied`,
        404: `Team not found`,
        422: `User must exist`,
      },
    });
  }
}
