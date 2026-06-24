import type { public_message_attachment } from './public_message_attachment';
import type { public_message_sender } from './public_message_sender';
export type public_message = {
  id?: number;
  content?: string | null;
  message_type?: number;
  content_type?: string;
  content_attributes?: Record<string, any>;
  created_at?: number;
  conversation_id?: number;
  attachments?: Array<public_message_attachment>;
  sender?: public_message_sender;
};
