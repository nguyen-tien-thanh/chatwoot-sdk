export type account_update_payload = {
  name?: string;
  locale?: string;
  domain?: string;
  support_email?: string;
  auto_resolve_after?: number | null;
  auto_resolve_message?: string | null;
  auto_resolve_ignore_waiting?: boolean | null;
  industry?: string;
  company_size?: string;
  timezone?: string;
};
