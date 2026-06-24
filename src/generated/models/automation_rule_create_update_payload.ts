export type automation_rule_create_update_payload = {
  name?: string;
  description?: string;
  event_name?: automation_rule_create_update_payload.event_name;
  active?: boolean;
  actions?: Array<Record<string, any>>;
  conditions?: Array<Record<string, any>>;
};
export namespace automation_rule_create_update_payload {
  export enum event_name {
    CONVERSATION_CREATED = 'conversation_created',
    CONVERSATION_UPDATED = 'conversation_updated',
    CONVERSATION_RESOLVED = 'conversation_resolved',
    MESSAGE_CREATED = 'message_created',
  }
}
