import type { conversation_meta } from './conversation_meta';
import type { message_detailed } from './message_detailed';
export type conversation_messages = {
  meta?: conversation_meta;
  payload?: Array<message_detailed>;
};
