export type inbox_create_sms_channel_payload = {
  type: inbox_create_sms_channel_payload.type;
  phone_number: string;
  provider_config?: Record<string, any>;
};
export namespace inbox_create_sms_channel_payload {
  export enum type {
    SMS = 'sms',
  }
}
