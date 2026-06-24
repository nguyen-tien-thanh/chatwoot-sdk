export type article = {
  id?: number;
  content?: string;
  meta?: Record<string, any>;
  position?: number;
  status?: article.status;
  title?: string;
  slug?: string;
  views?: number;
  portal_id?: number;
  account_id?: number;
  author_id?: number;
  category_id?: number;
  folder_id?: number;
  associated_article_id?: number;
};
export namespace article {
  export enum status {
    DRAFT = 'draft',
    PUBLISHED = 'published',
    ARCHIVED = 'archived',
  }
}
