export type agent_bot = {
  id?: number;
  name?: string;
  description?: string;
  thumbnail?: string;
  outgoing_url?: string;
  bot_type?: string;
  bot_config?: Record<string, any>;
  account_id?: number;
  access_token?: string;
  system_bot?: boolean;
};
