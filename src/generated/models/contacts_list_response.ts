import type { contact_list_item } from './contact_list_item';
import type { contact_meta } from './contact_meta';
export type contacts_list_response = {
  meta?: contact_meta;
  payload?: Array<contact_list_item>;
};
