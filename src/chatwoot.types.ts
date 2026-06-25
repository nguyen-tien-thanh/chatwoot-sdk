import type { contact_create_payload } from './generated/models/contact_create_payload';
import type { contact_update_payload } from './generated/models/contact_update_payload';
import type { ChatwootFileUpload } from './multipart';

export type { contact_create_payload as contact_create } from './generated/models/contact_create_payload';
export type { ChatwootFileUpload } from './multipart';

export type MessageCreateData = {
  content?: string;
  message_type?: 'outgoing' | 'incoming' | 'activity' | (string & {});
  private?: boolean;
  source_id?: string;
  source_reply_id?: string;
  content_type?: string;
  content_attributes?: Record<string, unknown>;
  /** When set, the request is sent as multipart/form-data instead of JSON. */
  attachments?: ChatwootFileUpload[];
};

export type ConversationCreateData = {
  source_id?: string;
  inbox_id?: number | string;
  contact_id?: number | string;
  assignee_id?: number | string;
  team_id?: number | string;
  status?: 'open' | 'resolved' | 'pending' | (string & {});
  additional_attributes?: Record<string, unknown>;
  custom_attributes?: Record<string, unknown>;
  message?: Record<string, unknown>;
  [key: string]: unknown;
};

export type ContactCreateData = Omit<contact_create_payload, 'avatar'> & {
  avatar?: ChatwootFileUpload;
};

export type ContactUpdateData = Omit<contact_update_payload, 'avatar'> & {
  avatar?: ChatwootFileUpload;
};
