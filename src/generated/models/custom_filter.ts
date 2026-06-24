export type custom_filter = {
  id?: number;
  name?: string;
  type?: custom_filter.type;
  query?: Record<string, any>;
  created_at?: string;
  updated_at?: string;
};
export namespace custom_filter {
  export enum type {
    CONVERSATION = 'conversation',
    CONTACT = 'contact',
    REPORT = 'report',
  }
}
