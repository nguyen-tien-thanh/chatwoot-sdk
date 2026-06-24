import { ChatwootAPI } from './generated';
import type { OpenAPIConfig } from './generated';
import type { ChatwootClientConfig } from './chatwoot.config';
import type {
  ContactCreateData,
  ContactUpdateData,
  ConversationCreateData,
  MessageCreateData,
} from './chatwoot.types';

export type {
  contact_create,
  ContactCreateData,
  ContactUpdateData,
  ConversationCreateData,
  MessageCreateData,
} from './chatwoot.types';

export class ChatwootClient {
  readonly api: ChatwootAPI;

  readonly contacts = {
    list: (params: {
      accountId: number;
      sort?: Parameters<ChatwootAPI['contacts']['contactList']>[0]['sort'];
      page?: number;
    }) =>
      this.api.contacts.contactList({
        accountId: params.accountId,
        sort: params.sort,
        page: params.page,
      }),

    create: (params: { accountId: number; data: ContactCreateData }) =>
      this.api.contacts.contactCreate({
        accountId: params.accountId,
        requestBody: params.data,
      }),

    update: (params: {
      accountId: number;
      id: number;
      data: ContactUpdateData;
    }) =>
      this.api.contacts.contactUpdate({
        accountId: params.accountId,
        id: params.id,
        requestBody: params.data,
      }),
  };

  readonly messages = {
    create: (params: {
      accountId: number;
      conversationId: number;
      data: MessageCreateData;
    }) =>
      this.api.messages.createANewMessageInAConversation({
        accountId: params.accountId,
        conversationId: params.conversationId,
        requestBody: params.data as Parameters<
          ChatwootAPI['messages']['createANewMessageInAConversation']
        >[0]['requestBody'],
      }),
  };

  readonly conversations = {
    create: (params: { accountId: number; data: ConversationCreateData }) =>
      this.api.conversations.newConversation({
        accountId: params.accountId,
        requestBody: params.data as Parameters<
          ChatwootAPI['conversations']['newConversation']
        >[0]['requestBody'],
      }),
  };

  constructor(config: ChatwootClientConfig) {
    const openApiConfig: Partial<OpenAPIConfig> = {
      BASE: config.baseUrl.replace(/\/$/, ''),
      TOKEN: config.token,
      WITH_CREDENTIALS: config.withCredentials ?? true,
      CREDENTIALS: 'include',
    };

    this.api = new ChatwootAPI(openApiConfig);
  }

  get account() {
    return this.api.account;
  }

  get accountAgentBots() {
    return this.api.accountAgentBots;
  }

  get accounts() {
    return this.api.accounts;
  }

  get accountUsers() {
    return this.api.accountUsers;
  }

  get agentBots() {
    return this.api.agentBots;
  }

  get agents() {
    return this.api.agents;
  }

  get auditLogs() {
    return this.api.auditLogs;
  }

  get automationRule() {
    return this.api.automationRule;
  }

  get cannedResponses() {
    return this.api.cannedResponses;
  }

  get contactLabels() {
    return this.api.contactLabels;
  }

  get conversation() {
    return this.api.conversation;
  }

  get conversationAssignments() {
    return this.api.conversationAssignments;
  }

  get customAttributes() {
    return this.api.customAttributes;
  }

  get customFilters() {
    return this.api.customFilters;
  }

  get helpCenter() {
    return this.api.helpCenter;
  }

  get inboxes() {
    return this.api.inboxes;
  }

  get integrations() {
    return this.api.integrations;
  }

  get labels() {
    return this.api.labels;
  }

  get profile() {
    return this.api.profile;
  }

  get reports() {
    return this.api.reports;
  }

  get teams() {
    return this.api.teams;
  }

  get users() {
    return this.api.users;
  }

  get webhooks() {
    return this.api.webhooks;
  }
}
