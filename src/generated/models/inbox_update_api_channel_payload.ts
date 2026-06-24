export type inbox_update_api_channel_payload = {
  webhook_url?: string;
  hmac_mandatory?: boolean;
  additional_attributes?: Record<string, any>;
};
