export type webhook_create_update_payload = {
  url?: string;
  name?: string;
  subscriptions?: Array<
    | 'conversation_created'
    | 'conversation_status_changed'
    | 'conversation_updated'
    | 'message_created'
    | 'message_updated'
    | 'contact_created'
    | 'contact_updated'
    | 'webwidget_triggered'
    | 'conversation_typing_on'
    | 'conversation_typing_off'
  >;
};
