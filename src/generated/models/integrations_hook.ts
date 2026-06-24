export type integrations_hook = {
  id?: string;
  app_id?: string;
  inbox_id?: string;
  account_id?: string;
  status?: boolean;
  hook_type?: boolean;
  settings?: Record<string, any>;
};
