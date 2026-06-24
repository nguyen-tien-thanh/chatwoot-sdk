import type { account_summary } from '../models/account_summary';
import type { agent_conversation_metrics } from '../models/agent_conversation_metrics';
import type { agent_summary } from '../models/agent_summary';
import type { channel_summary } from '../models/channel_summary';
import type { first_response_time_distribution } from '../models/first_response_time_distribution';
import type { inbox_label_matrix } from '../models/inbox_label_matrix';
import type { inbox_summary } from '../models/inbox_summary';
import type { outgoing_messages_count } from '../models/outgoing_messages_count';
import type { reporting_events_list_response } from '../models/reporting_events_list_response';
import type { team_summary } from '../models/team_summary';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ReportsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  public getAccountReportingEvents({
    accountId,
    page = 1,
    since,
    until,
    inboxId,
    userId,
    name,
  }: {
    accountId: number;
    page?: number;
    since?: string;
    until?: string;
    inboxId?: number;
    userId?: number;
    name?: string;
  }): CancelablePromise<reporting_events_list_response> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/accounts/{account_id}/reporting_events',
      path: {
        account_id: accountId,
      },
      query: {
        page: page,
        since: since,
        until: until,
        inbox_id: inboxId,
        user_id: userId,
        name: name,
      },
      errors: {
        403: `Access denied - Only administrators can access this endpoint`,
      },
    });
  }
  public listAllConversationStatistics({
    accountId,
    metric,
    type,
    id,
    since,
    until,
  }: {
    accountId: number;
    metric:
      | 'conversations_count'
      | 'incoming_messages_count'
      | 'outgoing_messages_count'
      | 'avg_first_response_time'
      | 'avg_resolution_time'
      | 'resolutions_count';
    type: 'account' | 'agent' | 'inbox' | 'label' | 'team';
    id?: string;
    since?: string;
    until?: string;
  }): CancelablePromise<
    Array<{
      value?: string;
      timestamp?: number;
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/accounts/{account_id}/reports',
      path: {
        account_id: accountId,
      },
      query: {
        metric: metric,
        type: type,
        id: id,
        since: since,
        until: until,
      },
      errors: {
        403: `Access denied`,
        404: `reports not found`,
      },
    });
  }
  public listAllConversationStatisticsSummary({
    accountId,
    type,
    id,
    since,
    until,
  }: {
    accountId: number;
    type: 'account' | 'agent' | 'inbox' | 'label' | 'team';
    id?: string;
    since?: string;
    until?: string;
  }): CancelablePromise<account_summary> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/accounts/{account_id}/reports/summary',
      path: {
        account_id: accountId,
      },
      query: {
        type: type,
        id: id,
        since: since,
        until: until,
      },
      errors: {
        403: `Access denied`,
        404: `reports not found`,
      },
    });
  }
  public getAccountConversationMetrics({
    accountId,
    type,
  }: {
    accountId: number;
    type: 'account';
  }): CancelablePromise<{
    open?: number;
    unattended?: number;
    unassigned?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/accounts/{account_id}/reports/conversations',
      path: {
        account_id: accountId,
      },
      query: {
        type: type,
      },
      errors: {
        403: `Access denied`,
        404: `reports not found`,
      },
    });
  }
  public getAgentConversationMetrics({
    accountId,
    type,
    userId,
  }: {
    accountId: number;
    type: 'agent';
    userId?: string;
  }): CancelablePromise<Array<agent_conversation_metrics>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/accounts/{account_id}/reports/conversations/',
      path: {
        account_id: accountId,
      },
      query: {
        type: type,
        user_id: userId,
      },
      errors: {
        403: `Access denied`,
        404: `reports not found`,
      },
    });
  }
  public getChannelSummaryReport({
    accountId,
    since,
    until,
  }: {
    accountId: number;
    since?: string;
    until?: string;
  }): CancelablePromise<channel_summary> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/accounts/{account_id}/summary_reports/channel',
      path: {
        account_id: accountId,
      },
      query: {
        since: since,
        until: until,
      },
      errors: {
        400: `Date range exceeds 6 months limit`,
        403: `Access denied`,
      },
    });
  }
  public getInboxSummaryReport({
    accountId,
    since,
    until,
    businessHours,
  }: {
    accountId: number;
    since?: string;
    until?: string;
    businessHours?: boolean;
  }): CancelablePromise<inbox_summary> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/accounts/{account_id}/summary_reports/inbox',
      path: {
        account_id: accountId,
      },
      query: {
        since: since,
        until: until,
        business_hours: businessHours,
      },
      errors: {
        403: `Access denied`,
      },
    });
  }
  public getAgentSummaryReport({
    accountId,
    since,
    until,
    businessHours,
  }: {
    accountId: number;
    since?: string;
    until?: string;
    businessHours?: boolean;
  }): CancelablePromise<agent_summary> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/accounts/{account_id}/summary_reports/agent',
      path: {
        account_id: accountId,
      },
      query: {
        since: since,
        until: until,
        business_hours: businessHours,
      },
      errors: {
        403: `Access denied`,
      },
    });
  }
  public getTeamSummaryReport({
    accountId,
    since,
    until,
    businessHours,
  }: {
    accountId: number;
    since?: string;
    until?: string;
    businessHours?: boolean;
  }): CancelablePromise<team_summary> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/accounts/{account_id}/summary_reports/team',
      path: {
        account_id: accountId,
      },
      query: {
        since: since,
        until: until,
        business_hours: businessHours,
      },
      errors: {
        403: `Access denied`,
      },
    });
  }
  public getFirstResponseTimeDistribution({
    accountId,
    since,
    until,
  }: {
    accountId: number;
    since?: string;
    until?: string;
  }): CancelablePromise<first_response_time_distribution> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/accounts/{account_id}/reports/first_response_time_distribution',
      path: {
        account_id: accountId,
      },
      query: {
        since: since,
        until: until,
      },
      errors: {
        403: `Access denied`,
      },
    });
  }
  public getInboxLabelMatrix({
    accountId,
    since,
    until,
    inboxIds,
    labelIds,
  }: {
    accountId: number;
    since?: string;
    until?: string;
    inboxIds?: Array<number>;
    labelIds?: Array<number>;
  }): CancelablePromise<inbox_label_matrix> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/accounts/{account_id}/reports/inbox_label_matrix',
      path: {
        account_id: accountId,
      },
      query: {
        since: since,
        until: until,
        inbox_ids: inboxIds,
        label_ids: labelIds,
      },
      errors: {
        403: `Access denied`,
      },
    });
  }
  public getOutgoingMessagesCount({
    accountId,
    groupBy,
    since,
    until,
  }: {
    accountId: number;
    groupBy: 'agent' | 'team' | 'inbox' | 'label';
    since?: string;
    until?: string;
  }): CancelablePromise<outgoing_messages_count> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/accounts/{account_id}/reports/outgoing_messages_count',
      path: {
        account_id: accountId,
      },
      query: {
        since: since,
        until: until,
        group_by: groupBy,
      },
      errors: {
        403: `Access denied`,
      },
    });
  }
}
