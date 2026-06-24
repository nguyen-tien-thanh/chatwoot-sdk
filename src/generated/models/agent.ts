export type agent = {
  id?: number;
  account_id?: number;
  readonly availability_status?: agent.availability_status;
  auto_offline?: boolean;
  confirmed?: boolean;
  email?: string;
  available_name?: string;
  name?: string;
  role?: agent.role;
  thumbnail?: string;
  custom_role_id?: number | null;
};
export namespace agent {
  export enum availability_status {
    ONLINE = 'online',
    BUSY = 'busy',
    OFFLINE = 'offline',
  }
  export enum role {
    AGENT = 'agent',
    ADMINISTRATOR = 'administrator',
  }
}
