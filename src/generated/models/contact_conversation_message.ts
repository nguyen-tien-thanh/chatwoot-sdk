export type contact_conversation_message = {
  id?: number;
  content?: string;
  account_id?: number;
  inbox_id?: number;
  conversation_id?: number;
  message_type?: number;
  created_at?: number;
  updated_at?: string;
  private?: boolean;
  status?: string;
  source_id?: string | null;
  content_type?: string;
  content_attributes?: Record<string, any>;
  sender_type?: string | null;
  sender_id?: number | null;
  external_source_ids?: Record<string, any>;
  additional_attributes?: Record<string, any>;
  processed_message_content?: string | null;
  sentiment?: Record<string, any>;
  conversation?: {
    assignee_id?: number | null;
    unread_count?: number;
    last_activity_at?: number;
    contact_inbox?: {
      source_id?: string;
    };
  };
  sender?: {
    id?: number;
    name?: string;
    available_name?: string;
    avatar_url?: string;
    type?: string;
    availability_status?: string;
    thumbnail?: string;
  };
};
