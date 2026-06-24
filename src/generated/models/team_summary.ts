export type team_summary = Array<{
  id?: number;
  conversations_count?: number;
  resolved_conversations_count?: number;
  avg_resolution_time?: number | null;
  avg_first_response_time?: number | null;
  avg_reply_time?: number | null;
}>;
