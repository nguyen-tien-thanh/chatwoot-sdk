export type article_create_update_payload = {
  title?: string;
  slug?: string;
  position?: number;
  content?: string;
  description?: string;
  category_id?: number;
  author_id?: number;
  associated_article_id?: number;
  status?: number;
  locale?: string;
  meta?: Record<string, any>;
};
