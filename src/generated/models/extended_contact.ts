import type { contact } from './contact';
export type extended_contact = contact & {
  id?: number;
  availability_status?: extended_contact.availability_status;
};
export namespace extended_contact {
  export enum availability_status {
    ONLINE = 'online',
    OFFLINE = 'offline',
  }
}
