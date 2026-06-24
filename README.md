# @nguyen-tien-thanh/chatwoot-sdk

TypeScript SDK for the [Chatwoot API](https://www.chatwoot.com/). Works with Node.js, TypeScript, and NestJS.

## Requirements

- Node.js >= 18

## Installation

```bash
npm install @nguyen-tien-thanh/chatwoot-sdk
# or
pnpm add @nguyen-tien-thanh/chatwoot-sdk
```

## Getting an API token

1. Sign in to your Chatwoot instance.
2. Go to **Profile Settings** → **Access Token**.
3. Copy the token and pass it as `token` in the client config.

`baseUrl` is your Chatwoot instance URL, e.g. `https://app.chatwoot.com` or your self-hosted URL.

## Initialize the client

```ts
import { ChatwootClient } from '@nguyen-tien-thanh/chatwoot-sdk';

const client = new ChatwootClient({
  baseUrl: 'https://app.chatwoot.com',
  token: process.env.CHATWOOT_API_TOKEN!,
});
```

### Configuration

| Property          | Required | Description                              |
| ----------------- | -------- | ---------------------------------------- |
| `baseUrl`         | Yes      | Chatwoot instance URL                    |
| `token`           | Yes      | API access token                         |
| `withCredentials` | No       | Send cookies with requests (default: `true`) |

## Examples

### List contacts

```ts
const response = await client.contacts.list({
  accountId: 1,
  page: 1,
  sort: 'name',
});

console.log(response.payload);
```

### Create a contact

```ts
import type { ContactCreateData } from '@nguyen-tien-thanh/chatwoot-sdk';

const data: ContactCreateData = {
  name: 'Jane Doe',
  email: 'jane@example.com',
};

const contact = await client.contacts.create({
  accountId: 1,
  data,
});
```

### Update a contact

```ts
await client.contacts.update({
  accountId: 1,
  id: 42,
  data: {
    name: 'Jane Smith',
  },
});
```

### Create a conversation

```ts
const conversation = await client.conversations.create({
  accountId: 1,
  data: {
    inbox_id: 2,
    contact_id: 42,
    status: 'open',
  },
});
```

### Send a message

```ts
await client.messages.create({
  accountId: 1,
  conversationId: 100,
  data: {
    content: 'Hello!',
    message_type: 'outgoing',
  },
});
```

## Full API access

The SDK wraps the full Chatwoot API. In addition to the `contacts`, `messages`, and `conversations` helpers, you can call services directly:

```ts
// Via client getters
await client.inboxes.inboxList({ accountId: 1 });
await client.agents.agentList({ accountId: 1 });
await client.labels.labelList({ accountId: 1 });
await client.webhooks.listAllWebhooks({ accountId: 1 });

// Or via client.api
await client.api.teams.teamList({ accountId: 1 });
await client.api.reports.getAccountReports({ accountId: 1, metric: 'conversations_count' });
```

Available services include `account`, `accounts`, `agents`, `agentBots`, `inboxes`, `labels`, `teams`, `users`, `webhooks`, `reports`, `helpCenter`, `integrations`, `customAttributes`, `customFilters`, `automationRule`, `cannedResponses`, `auditLogs`, and more.

## Low-level API

For finer control, use `ChatwootAPI` directly:

```ts
import { ChatwootAPI } from '@nguyen-tien-thanh/chatwoot-sdk';

const api = new ChatwootAPI({
  BASE: 'https://app.chatwoot.com',
  TOKEN: process.env.CHATWOOT_API_TOKEN!,
});

await api.contacts.contactList({ accountId: 1 });
```

All types and models (e.g. `contact`, `conversation`, `inbox`, `ApiError`) are exported from the main package:

```ts
import type { contact, conversation, inbox } from '@nguyen-tien-thanh/chatwoot-sdk';
```

## Error handling

```ts
import { ApiError } from '@nguyen-tien-thanh/chatwoot-sdk';

try {
  await client.contacts.list({ accountId: 1 });
} catch (error) {
  if (error instanceof ApiError) {
    console.error(error.status);     // HTTP status code
    console.error(error.statusText); // HTTP status text
    console.error(error.body);       // Response body from Chatwoot
  }
  throw error;
}
```

## NestJS

Install `@nestjs/common` when using the NestJS module:

```bash
pnpm add @nestjs/common
```

### Single client

```ts
import { Module } from '@nestjs/common';
import { ChatwootModule } from '@nguyen-tien-thanh/chatwoot-sdk';

@Module({
  imports: [
    ChatwootModule.register({
      baseUrl: 'https://app.chatwoot.com',
      token: process.env.CHATWOOT_API_TOKEN!,
    }),
  ],
})
export class AppModule {}
```

Inject the client into a service:

```ts
import { Injectable, Inject } from '@nestjs/common';
import {
  CHATWOOT_CLIENT,
  ChatwootClient,
} from '@nguyen-tien-thanh/chatwoot-sdk';

@Injectable()
export class SupportService {
  constructor(
    @Inject(CHATWOOT_CLIENT) private readonly chatwoot: ChatwootClient,
  ) {}

  async listContacts(accountId: number) {
    return this.chatwoot.contacts.list({ accountId });
  }
}
```

Or inject by class directly:

```ts
constructor(private readonly chatwoot: ChatwootClient) {}
```

### Multiple clients (multi-tenant)

```ts
ChatwootModule.registerClients({
  clients: {
    tenantA: {
      baseUrl: 'https://tenant-a.chatwoot.com',
      token: process.env.TENANT_A_TOKEN!,
    },
    tenantB: {
      baseUrl: 'https://tenant-b.chatwoot.com',
      token: process.env.TENANT_B_TOKEN!,
    },
  },
});
```

```ts
import { Inject } from '@nestjs/common';
import { CHATWOOT_CLIENT, ChatwootClient } from '@nguyen-tien-thanh/chatwoot-sdk';

constructor(
  @Inject(CHATWOOT_CLIENT)
  private readonly clients: Record<string, ChatwootClient>,
) {}

async sync() {
  await this.clients.tenantA.contacts.list({ accountId: 1 });
}
```

## TypeScript

The package ships with full type definitions. Enable `strict` mode in your TypeScript project for the best autocomplete and type checking.

## License

ISC
