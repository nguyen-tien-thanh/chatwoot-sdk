export type agent_bot_create_update_payload = {
  name?: string;
  description?: string;
  outgoing_url?: string;
  avatar?: Blob;
  avatar_url?: string;
  bot_type?: number;
  bot_config?: Record<string, any>;
};
