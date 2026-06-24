export type conversation_message_create_payload = {
  content: string;
  message_type?: conversation_message_create_payload.message_type;
  private?: boolean;
  content_type?: conversation_message_create_payload.content_type;
  content_attributes?: Record<string, any>;
  campaign_id?: number;
  template_params?: {
    name: string;
    category: conversation_message_create_payload.category;
    language: string;
    processed_params: {
      body?: Record<string, string>;
      header?: {
        media_url?: string;
        media_type?: conversation_message_create_payload.media_type;
      };
      buttons?: Array<{
        type?: 'url' | 'copy_code';
        parameter?: string;
      }>;
    };
  };
};
export namespace conversation_message_create_payload {
  export enum message_type {
    OUTGOING = 'outgoing',
    INCOMING = 'incoming',
  }
  export enum content_type {
    TEXT = 'text',
    INPUT_EMAIL = 'input_email',
    CARDS = 'cards',
    INPUT_SELECT = 'input_select',
    FORM = 'form',
    ARTICLE = 'article',
  }
  export enum category {
    UTILITY = 'UTILITY',
    MARKETING = 'MARKETING',
    SHIPPING_UPDATE = 'SHIPPING_UPDATE',
    TICKET_UPDATE = 'TICKET_UPDATE',
    ISSUE_RESOLUTION = 'ISSUE_RESOLUTION',
  }
  export enum media_type {
    IMAGE = 'image',
    VIDEO = 'video',
    DOCUMENT = 'document',
  }
}
