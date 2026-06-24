export type user = {
  id?: number;
  access_token?: string;
  account_id?: number;
  available_name?: string;
  avatar_url?: string;
  confirmed?: boolean;
  display_name?: string | null;
  message_signature?: string | null;
  email?: string;
  hmac_identifier?: string;
  inviter_id?: number | null;
  name?: string;
  provider?: string;
  pubsub_token?: string;
  role?: user.role;
  ui_settings?: Record<string, any>;
  uid?: string;
  type?: string | null;
  custom_attributes?: Record<string, any>;
  accounts?: Array<{
    id?: number;
    name?: string;
    status?: string;
    active_at?: string | null;
    role?: 'administrator' | 'agent';
    permissions?: Array<string>;
    availability?: string;
    availability_status?: string;
    auto_offline?: boolean;
    custom_role_id?: number | null;
    custom_role?: any | null;
  }>;
};
export namespace user {
  export enum role {
    AGENT = 'agent',
    ADMINISTRATOR = 'administrator',
  }
}
