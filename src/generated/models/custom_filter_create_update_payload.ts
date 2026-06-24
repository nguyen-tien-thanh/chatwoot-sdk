export type custom_filter_create_update_payload = {
  name?: string;
  type?: custom_filter_create_update_payload.type;
  query?: Record<string, any>;
};
export namespace custom_filter_create_update_payload {
  export enum type {
    CONVERSATION = 'conversation',
    CONTACT = 'contact',
    REPORT = 'report',
  }
}
