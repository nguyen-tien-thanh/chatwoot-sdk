import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';
import { AccountService } from './services/AccountService';
import { AccountAgentBotsService } from './services/AccountAgentBotsService';
import { AccountsService } from './services/AccountsService';
import { AccountUsersService } from './services/AccountUsersService';
import { AgentBotsService } from './services/AgentBotsService';
import { AgentsService } from './services/AgentsService';
import { AuditLogsService } from './services/AuditLogsService';
import { AutomationRuleService } from './services/AutomationRuleService';
import { CannedResponsesService } from './services/CannedResponsesService';
import { ContactLabelsService } from './services/ContactLabelsService';
import { ContactsService } from './services/ContactsService';
import { ContactsApiService } from './services/ContactsApiService';
import { ConversationService } from './services/ConversationService';
import { ConversationAssignmentsService } from './services/ConversationAssignmentsService';
import { ConversationsService } from './services/ConversationsService';
import { ConversationsApiService } from './services/ConversationsApiService';
import { CsatSurveyPageService } from './services/CsatSurveyPageService';
import { CustomAttributesService } from './services/CustomAttributesService';
import { CustomFiltersService } from './services/CustomFiltersService';
import { HelpCenterService } from './services/HelpCenterService';
import { InboxApiService } from './services/InboxApiService';
import { InboxesService } from './services/InboxesService';
import { IntegrationsService } from './services/IntegrationsService';
import { LabelsService } from './services/LabelsService';
import { MessagesService } from './services/MessagesService';
import { MessagesApiService } from './services/MessagesApiService';
import { ProfileService } from './services/ProfileService';
import { ReportsService } from './services/ReportsService';
import { TeamsService } from './services/TeamsService';
import { UsersService } from './services/UsersService';
import { WebhooksService } from './services/WebhooksService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class ChatwootAPI {
  public readonly account: AccountService;
  public readonly accountAgentBots: AccountAgentBotsService;
  public readonly accounts: AccountsService;
  public readonly accountUsers: AccountUsersService;
  public readonly agentBots: AgentBotsService;
  public readonly agents: AgentsService;
  public readonly auditLogs: AuditLogsService;
  public readonly automationRule: AutomationRuleService;
  public readonly cannedResponses: CannedResponsesService;
  public readonly contactLabels: ContactLabelsService;
  public readonly contacts: ContactsService;
  public readonly contactsApi: ContactsApiService;
  public readonly conversation: ConversationService;
  public readonly conversationAssignments: ConversationAssignmentsService;
  public readonly conversations: ConversationsService;
  public readonly conversationsApi: ConversationsApiService;
  public readonly csatSurveyPage: CsatSurveyPageService;
  public readonly customAttributes: CustomAttributesService;
  public readonly customFilters: CustomFiltersService;
  public readonly helpCenter: HelpCenterService;
  public readonly inboxApi: InboxApiService;
  public readonly inboxes: InboxesService;
  public readonly integrations: IntegrationsService;
  public readonly labels: LabelsService;
  public readonly messages: MessagesService;
  public readonly messagesApi: MessagesApiService;
  public readonly profile: ProfileService;
  public readonly reports: ReportsService;
  public readonly teams: TeamsService;
  public readonly users: UsersService;
  public readonly webhooks: WebhooksService;
  public readonly request: BaseHttpRequest;
  constructor(
    config?: Partial<OpenAPIConfig>,
    HttpRequest: HttpRequestConstructor = AxiosHttpRequest,
  ) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? 'https://app.chatwoot.com',
      VERSION: config?.VERSION ?? '1.1.0',
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? 'include',
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });
    this.account = new AccountService(this.request);
    this.accountAgentBots = new AccountAgentBotsService(this.request);
    this.accounts = new AccountsService(this.request);
    this.accountUsers = new AccountUsersService(this.request);
    this.agentBots = new AgentBotsService(this.request);
    this.agents = new AgentsService(this.request);
    this.auditLogs = new AuditLogsService(this.request);
    this.automationRule = new AutomationRuleService(this.request);
    this.cannedResponses = new CannedResponsesService(this.request);
    this.contactLabels = new ContactLabelsService(this.request);
    this.contacts = new ContactsService(this.request);
    this.contactsApi = new ContactsApiService(this.request);
    this.conversation = new ConversationService(this.request);
    this.conversationAssignments = new ConversationAssignmentsService(
      this.request,
    );
    this.conversations = new ConversationsService(this.request);
    this.conversationsApi = new ConversationsApiService(this.request);
    this.csatSurveyPage = new CsatSurveyPageService(this.request);
    this.customAttributes = new CustomAttributesService(this.request);
    this.customFilters = new CustomFiltersService(this.request);
    this.helpCenter = new HelpCenterService(this.request);
    this.inboxApi = new InboxApiService(this.request);
    this.inboxes = new InboxesService(this.request);
    this.integrations = new IntegrationsService(this.request);
    this.labels = new LabelsService(this.request);
    this.messages = new MessagesService(this.request);
    this.messagesApi = new MessagesApiService(this.request);
    this.profile = new ProfileService(this.request);
    this.reports = new ReportsService(this.request);
    this.teams = new TeamsService(this.request);
    this.users = new UsersService(this.request);
    this.webhooks = new WebhooksService(this.request);
  }
}
