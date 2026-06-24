export type account_detail = {
  id?: number;
  name?: string;
  locale?: string;
  domain?: string;
  support_email?: string;
  status?: string;
  created_at?: string;
  cache_keys?: Record<string, any>;
  features?: Record<string, any>;
  settings?: {
    auto_resolve_after?: number;
    auto_resolve_message?: string;
    auto_resolve_ignore_waiting?: boolean;
  };
  custom_attributes?: {
    plan_name?: string | null;
    subscribed_quantity?: number | null;
    subscription_status?: string | null;
    subscription_ends_on?: string | null;
    industry?: string;
    company_size?: string;
    timezone?: string;
    logo?: string;
    onboarding_step?: string;
    marked_for_deletion_at?: string;
    marked_for_deletion_reason?: string;
  };
};
