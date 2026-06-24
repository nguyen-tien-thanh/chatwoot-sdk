export type message = {
  id?: number;
  content?: string;
  account_id?: number;
  inbox_id?: number;
  conversation_id?: number;
  message_type?: message.message_type;
  created_at?: number;
  updated_at?: number | string;
  private?: boolean;
  status?: message.status;
  source_id?: string | null;
  content_type?: message.content_type;
  content_attributes?: Record<string, any>;
  sender_type?: message.sender_type;
  sender_id?: number | null;
  external_source_ids?: Record<string, any>;
  additional_attributes?: Record<string, any>;
  processed_message_content?: string | null;
  sentiment?: any | null;
  conversation?: any | null;
  attachment?: any | null;
  sender?: Record<string, any>;
};
export namespace message {
  export enum message_type {
    '_0' = 0,
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
  }
  export enum status {
    SENT = 'sent',
    DELIVERED = 'delivered',
    READ = 'read',
    FAILED = 'failed',
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
  export enum sender_type {
    CONTACT = 'Contact',
    USER = 'User',
    AGENT_BOT = 'AgentBot',
    CAPTAIN_ASSISTANT = 'Captain::Assistant',
  }
}
