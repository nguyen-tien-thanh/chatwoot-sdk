export type inbox_update_whatsapp_channel_payload = {
  phone_number?: string;
  provider?: inbox_update_whatsapp_channel_payload.provider;
  provider_config?: {
    api_key?: string;
    phone_number_id?: string;
    business_account_id?: string;
  };
};
export namespace inbox_update_whatsapp_channel_payload {
  export enum provider {
    WHATSAPP_CLOUD = 'whatsapp_cloud',
    DEFAULT = 'default',
  }
}
