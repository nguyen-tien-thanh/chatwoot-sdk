import type { public_contact_record } from './public_contact_record';
import type { public_message } from './public_message';
export type public_conversation = {
  id?: number;
  uuid?: string;
  inbox_id?: number;
  contact_last_seen_at?: number;
  status?: public_conversation.status;
  agent_last_seen_at?: number;
  messages?: Array<public_message>;
  contact?: public_contact_record;
};
export namespace public_conversation {
  export enum status {
    OPEN = 'open',
    RESOLVED = 'resolved',
    PENDING = 'pending',
    SNOOZED = 'snoozed',
  }
}
