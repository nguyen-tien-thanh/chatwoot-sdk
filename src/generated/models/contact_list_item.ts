import type { contact_inbox } from './contact_inbox';
export type contact_list_item = {
  additional_attributes?: {
    city?: string;
    country?: string;
    country_code?: string | null;
    created_at_ip?: string;
  };
  availability_status?: contact_list_item.availability_status;
  email?: string | null;
  id?: number;
  name?: string;
  phone_number?: string | null;
  blocked?: boolean;
  identifier?: string | null;
  thumbnail?: string;
  custom_attributes?: Record<string, any>;
  last_activity_at?: number | null;
  created_at?: number;
  contact_inboxes?: Array<contact_inbox>;
};
export namespace contact_list_item {
  export enum availability_status {
    ONLINE = 'online',
    OFFLINE = 'offline',
  }
}
