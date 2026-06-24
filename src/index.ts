export { ChatwootClient } from './chatwoot-client';
export { ChatwootModule } from './chatwoot.module';
export {
  CHATWOOT_CLIENT,
  CHATWOOT_OPTIONS,
} from './chatwoot.config';
export type {
  ChatwootClientConfig,
  ChatwootClientsConfig,
} from './chatwoot.config';
export type {
  contact_create,
  ContactCreateData,
  ContactUpdateData,
  ConversationCreateData,
  MessageCreateData,
} from './chatwoot.types';

export * from './generated';
