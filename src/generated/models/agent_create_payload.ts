export type agent_create_payload = {
  name: string;
  email: string;
  role: agent_create_payload.role;
  availability?: agent_create_payload.availability;
  auto_offline?: boolean;
};
export namespace agent_create_payload {
  export enum role {
    AGENT = 'agent',
    ADMINISTRATOR = 'administrator',
  }
  export enum availability {
    ONLINE = 'online',
    BUSY = 'busy',
    OFFLINE = 'offline',
  }
}
