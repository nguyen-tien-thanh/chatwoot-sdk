export type inbox_create_whatsapp_channel_payload =
  | {
      type: inbox_create_whatsapp_channel_payload.type;
      phone_number: string;
      provider: inbox_create_whatsapp_channel_payload.provider;
      provider_config: {
        api_key: string;
        phone_number_id: string;
        business_account_id: string;
      };
    }
  | {
      type: inbox_create_whatsapp_channel_payload.type;
      phone_number: string;
      provider?: inbox_create_whatsapp_channel_payload.provider;
      provider_config: {
        api_key: string;
      };
    };
export namespace inbox_create_whatsapp_channel_payload {
  export enum type {
    WHATSAPP = 'whatsapp',
  }
  export enum provider {
    WHATSAPP_CLOUD = 'whatsapp_cloud',
  }
}
