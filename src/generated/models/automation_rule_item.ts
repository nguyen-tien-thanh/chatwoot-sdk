export type automation_rule_item = {
  id?: number;
  account_id?: number;
  name?: string;
  description?: string;
  event_name?: automation_rule_item.event_name;
  conditions?: Array<{
    values?: Array<string>;
    attribute_key?: string;
    query_operator?: string;
    filter_operator?: string;
  }>;
  actions?: Array<{
    action_name?: string;
    action_params?: Array<string>;
  }>;
  created_on?: number;
  active?: boolean;
};
export namespace automation_rule_item {
  export enum event_name {
    CONVERSATION_CREATED = 'conversation_created',
    CONVERSATION_UPDATED = 'conversation_updated',
    MESSAGE_CREATED = 'message_created',
  }
}
