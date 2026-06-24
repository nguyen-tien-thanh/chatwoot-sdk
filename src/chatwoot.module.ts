import type { DynamicModule } from '@nestjs/common';
import { ChatwootClient } from './chatwoot-client';
import {
  CHATWOOT_CLIENT,
  CHATWOOT_OPTIONS,
  ChatwootClientConfig,
  ChatwootClientsConfig,
} from './chatwoot.config';

export class ChatwootModule {
  static register(options: ChatwootClientConfig): DynamicModule {
    const client = new ChatwootClient(options);

    return {
      module: ChatwootModule,
      providers: [
        { provide: CHATWOOT_OPTIONS, useValue: options },
        { provide: CHATWOOT_CLIENT, useValue: client },
        { provide: ChatwootClient, useValue: client },
      ],
      exports: [CHATWOOT_CLIENT, ChatwootClient],
    };
  }

  static registerClients(options: ChatwootClientsConfig): DynamicModule {
    const clients = Object.fromEntries(
      Object.entries(options.clients).map(([key, config]) => [
        key,
        new ChatwootClient(config),
      ]),
    );

    return {
      module: ChatwootModule,
      providers: [
        { provide: CHATWOOT_OPTIONS, useValue: options },
        { provide: CHATWOOT_CLIENT, useValue: clients },
      ],
      exports: [CHATWOOT_CLIENT],
    };
  }
}
