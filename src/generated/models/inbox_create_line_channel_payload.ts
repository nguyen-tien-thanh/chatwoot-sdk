export type inbox_create_line_channel_payload = {
  type: inbox_create_line_channel_payload.type;
  line_channel_id: string;
  line_channel_secret: string;
  line_channel_token: string;
};
export namespace inbox_create_line_channel_payload {
  export enum type {
    LINE = 'line',
  }
}
