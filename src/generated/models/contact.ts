import type { contact_inboxes } from './contact_inboxes';
export type contact = {
  payload?: Array<{
    additional_attributes?: Record<string, any>;
    availability_status?: string;
    email?: string;
    id?: number;
    name?: string;
    phone_number?: string;
    blocked?: boolean;
    identifier?: string;
    thumbnail?: string;
    custom_attributes?: Record<string, any>;
    last_activity_at?: number;
    created_at?: number;
    contact_inboxes?: Array<contact_inboxes>;
  }>;
};
