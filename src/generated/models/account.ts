export type account = {
  id?: number;
  name?: string;
  role?: account.role;
};
export namespace account {
  export enum role {
    ADMINISTRATOR = 'administrator',
    AGENT = 'agent',
  }
}
