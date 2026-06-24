import type { agent } from './agent';
import type { contact_detail } from './contact_detail';
export type conversation_meta = {
  labels?: Array<string>;
  additional_attributes?: {
    browser?: {
      device_name?: string;
      browser_name?: string;
      platform_name?: string;
      browser_version?: string;
      platform_version?: string;
    };
    referer?: string;
    initiated_at?: {
      timestamp?: string;
    };
    browser_language?: string;
    conversation_language?: string;
  };
  contact?: contact_detail;
  assignee?: agent | null;
  agent_last_seen_at?: string | null;
  assignee_last_seen_at?: string | null;
};
