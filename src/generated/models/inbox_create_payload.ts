import type { inbox_create_api_channel_payload } from './inbox_create_api_channel_payload';
import type { inbox_create_email_channel_payload } from './inbox_create_email_channel_payload';
import type { inbox_create_line_channel_payload } from './inbox_create_line_channel_payload';
import type { inbox_create_sms_channel_payload } from './inbox_create_sms_channel_payload';
import type { inbox_create_telegram_channel_payload } from './inbox_create_telegram_channel_payload';
import type { inbox_create_web_widget_channel_payload } from './inbox_create_web_widget_channel_payload';
import type { inbox_create_whatsapp_channel_payload } from './inbox_create_whatsapp_channel_payload';
export type inbox_create_payload = {
  name?: string;
  avatar?: Blob;
  greeting_enabled?: boolean;
  greeting_message?: string;
  enable_email_collect?: boolean;
  csat_survey_enabled?: boolean;
  csat_config?: {
    display_type?: inbox_create_payload.display_type;
    message?: string;
    button_text?: string;
    language?: string;
    survey_rules?: {
      operator?: string;
      values?: Array<string>;
    };
  };
  enable_auto_assignment?: boolean;
  working_hours_enabled?: boolean;
  out_of_office_message?: string;
  timezone?: string;
  allow_messages_after_resolved?: boolean;
  lock_to_single_conversation?: boolean;
  portal_id?: number;
  sender_name_type?: inbox_create_payload.sender_name_type;
  business_name?: string;
  channel?:
    | inbox_create_web_widget_channel_payload
    | inbox_create_api_channel_payload
    | inbox_create_email_channel_payload
    | inbox_create_line_channel_payload
    | inbox_create_telegram_channel_payload
    | inbox_create_whatsapp_channel_payload
    | inbox_create_sms_channel_payload;
};
export namespace inbox_create_payload {
  export enum display_type {
    EMOJI = 'emoji',
    STAR = 'star',
  }
  export enum sender_name_type {
    FRIENDLY = 'friendly',
    PROFESSIONAL = 'professional',
  }
}
