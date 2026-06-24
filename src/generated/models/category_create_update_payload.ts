export type category_create_update_payload = {
  name?: string;
  description?: string;
  position?: number;
  slug?: string;
  locale?: string;
  icon?: string;
  parent_category_id?: number;
  associated_category_id?: number;
};
