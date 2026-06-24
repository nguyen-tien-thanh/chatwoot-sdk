import type { message } from './message';
export type conversation = {
  id?: number;
  messages?: Array<message>;
  account_id?: number;
  uuid?: string;
  additional_attributes?: Record<string, any>;
  agent_last_seen_at?: number;
  assignee_last_seen_at?: number;
  can_reply?: boolean;
  contact_last_seen_at?: number;
  custom_attributes?: Record<string, any>;
  inbox_id?: number;
  labels?: Array<string>;
  muted?: boolean;
  snoozed_until?: number | null;
  status?: conversation.status;
  created_at?: number;
  updated_at?: number;
  timestamp?: number;
  first_reply_created_at?: number | null;
  unread_count?: number;
  last_non_activity_message?: message | null;
  last_activity_at?: number;
  priority?: string | null;
  waiting_since?: number | null;
  sla_policy_id?: number | null;
  applied_sla?: Record<string, any>;
  sla_events?: Array<Record<string, any>>;
};
export namespace conversation {
  export enum status {
    OPEN = 'open',
    RESOLVED = 'resolved',
    PENDING = 'pending',
  }
}
