export type agent_update_payload = {
  role: agent_update_payload.role;
  availability?: agent_update_payload.availability;
  auto_offline?: boolean;
};
export namespace agent_update_payload {
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
