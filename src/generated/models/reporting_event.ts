export type reporting_event = {
  id?: number;
  name?: string;
  value?: number;
  value_in_business_hours?: number;
  event_start_time?: string;
  event_end_time?: string;
  account_id?: number;
  conversation_id?: number | null;
  inbox_id?: number | null;
  user_id?: number | null;
  created_at?: string;
  updated_at?: string;
};
