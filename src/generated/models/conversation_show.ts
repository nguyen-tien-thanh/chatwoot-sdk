import type { conversation } from './conversation';
import type { user } from './user';
export type conversation_show = conversation & {
  meta?: {
    sender?: {
      additional_attributes?: Record<string, any>;
      availability_status?: string;
      email?: string | null;
      id?: number;
      name?: string;
      phone_number?: string | null;
      blocked?: boolean;
      identifier?: string | null;
      thumbnail?: string | null;
      custom_attributes?: Record<string, any>;
      last_activity_at?: number;
      created_at?: number;
    };
    channel?: string;
    assignee?: user;
    hmac_verified?: boolean;
  };
};
