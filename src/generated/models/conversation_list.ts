import type { conversation } from './conversation';
import type { generic_id } from './generic_id';
import type { user } from './user';
export type conversation_list = {
  data?: {
    meta?: {
      mine_count?: number;
      unassigned_count?: number;
      assigned_count?: number;
      all_count?: number;
    };
    payload?: Array<
      generic_id &
        conversation & {
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
        }
    >;
  };
};
