export type integrations_app = {
  id?: string;
  name?: string;
  description?: string;
  hook_type?: string;
  enabled?: boolean;
  allow_multiple_hooks?: boolean;
  hooks?: Array<Record<string, any>>;
};
