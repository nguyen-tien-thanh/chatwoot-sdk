export type portal_create_update_payload = {
  color?: string;
  custom_domain?: string;
  header_text?: string;
  homepage_link?: string;
  name?: string;
  page_title?: string;
  slug?: string;
  archived?: boolean;
  config?: Record<string, any>;
};
