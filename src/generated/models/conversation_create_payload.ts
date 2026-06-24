export type conversation_create_payload = {
  source_id: string;
  inbox_id?: number;
  contact_id?: number;
  additional_attributes?: Record<string, any>;
  custom_attributes?: Record<string, any>;
  status?: conversation_create_payload.status;
  assignee_id?: number;
  team_id?: number;
  snoozed_until?: string;
  message?: {
    content: string;
    template_params?: {
      name?: string;
      category?: string;
      language?: string;
      processed_params?: Record<string, any>;
    };
  };
};
export namespace conversation_create_payload {
  export enum status {
    OPEN = 'open',
    RESOLVED = 'resolved',
    PENDING = 'pending',
  }
}
