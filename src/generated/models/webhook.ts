export type webhook = {
  id?: number;
  url?: string;
  name?: string;
  subscriptions?: Array<
    | 'conversation_created'
    | 'conversation_status_changed'
    | 'conversation_updated'
    | 'contact_created'
    | 'contact_updated'
    | 'message_created'
    | 'message_updated'
    | 'webwidget_triggered'
    | 'conversation_typing_on'
    | 'conversation_typing_off'
  >;
  secret?: string | null;
  account_id?: number;
};
