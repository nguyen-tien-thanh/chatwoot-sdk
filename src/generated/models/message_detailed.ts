import type { contact_detail } from './contact_detail';
export type message_detailed = {
  id?: number;
  content?: string;
  inbox_id?: number;
  conversation_id?: number;
  message_type?: message_detailed.message_type;
  content_type?: message_detailed.content_type;
  status?: message_detailed.status;
  content_attributes?: {
    in_reply_to?: string | null;
  };
  echo_id?: string | null;
  created_at?: number;
  private?: boolean;
  source_id?: string | null;
  sender?: contact_detail;
  attachments?: Array<{
    id?: number;
    message_id?: number;
    file_type?:
      | 'image'
      | 'video'
      | 'audio'
      | 'file'
      | 'location'
      | 'fallback'
      | 'share'
      | 'story_mention'
      | 'contact'
      | 'ig_reel';
    account_id?: number;
    data_url?: string;
    thumb_url?: string;
    file_size?: number;
  }>;
};
export namespace message_detailed {
  export enum message_type {
    '_0' = 0,
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
  }
  export enum content_type {
    TEXT = 'text',
    INPUT_TEXT = 'input_text',
    INPUT_TEXTAREA = 'input_textarea',
    INPUT_EMAIL = 'input_email',
    INPUT_SELECT = 'input_select',
    CARDS = 'cards',
    FORM = 'form',
    ARTICLE = 'article',
    INCOMING_EMAIL = 'incoming_email',
    INPUT_CSAT = 'input_csat',
    INTEGRATIONS = 'integrations',
    STICKER = 'sticker',
    VOICE_CALL = 'voice_call',
  }
  export enum status {
    SENT = 'sent',
    DELIVERED = 'delivered',
    READ = 'read',
    FAILED = 'failed',
  }
}
