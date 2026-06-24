export const SDK_VERSION = '1.0.0';

export type ChatwootSdkConfig = {
  baseUrl: string;
  apiAccessToken: string;
};

export class ChatwootClient {
  constructor(private readonly config: ChatwootSdkConfig) {}

  get baseUrl(): string {
    return this.config.baseUrl;
  }
}
