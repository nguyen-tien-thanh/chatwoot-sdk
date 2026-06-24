export interface ChatwootClientConfig {
  baseUrl: string;
  token: string;
  withCredentials?: boolean;
}

export interface ChatwootClientsConfig {
  clients: Record<string, ChatwootClientConfig>;
}

export const CHATWOOT_CLIENT = 'CHATWOOT_CLIENT';
export const CHATWOOT_OPTIONS = 'CHATWOOT_OPTIONS';
