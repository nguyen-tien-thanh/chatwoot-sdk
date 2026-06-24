export type contact_inbox = {
  source_id?: string;
  inbox?: {
    id?: number;
    avatar_url?: string;
    channel_id?: number;
    name?: string;
    channel_type?: string;
    provider?: string | null;
  };
};
