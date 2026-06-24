export type inbox_create_telegram_channel_payload = {
  type: inbox_create_telegram_channel_payload.type;
  bot_token: string;
};
export namespace inbox_create_telegram_channel_payload {
  export enum type {
    TELEGRAM = 'telegram',
  }
}
