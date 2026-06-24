export type inbox_create_web_widget_channel_payload = {
  type: inbox_create_web_widget_channel_payload.type;
  website_url: string;
  welcome_title?: string;
  welcome_tagline?: string;
  widget_color?: string;
  reply_time?: inbox_create_web_widget_channel_payload.reply_time;
  pre_chat_form_enabled?: boolean;
  pre_chat_form_options?: Record<string, any>;
  continuity_via_email?: boolean;
  hmac_mandatory?: boolean;
  allowed_domains?: string;
  selected_feature_flags?: Array<
    | 'attachments'
    | 'emoji_picker'
    | 'end_conversation'
    | 'use_inbox_avatar_for_bot'
    | 'allow_mobile_webview'
  >;
};
export namespace inbox_create_web_widget_channel_payload {
  export enum type {
    WEB_WIDGET = 'web_widget',
  }
  export enum reply_time {
    IN_A_FEW_MINUTES = 'in_a_few_minutes',
    IN_A_FEW_HOURS = 'in_a_few_hours',
    IN_A_DAY = 'in_a_day',
  }
}
