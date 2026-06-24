export type inbox_create_api_channel_payload = {
  type: inbox_create_api_channel_payload.type;
  webhook_url?: string;
  hmac_mandatory?: boolean;
  additional_attributes?: Record<string, any>;
};
export namespace inbox_create_api_channel_payload {
  export enum type {
    API = 'api',
  }
}
