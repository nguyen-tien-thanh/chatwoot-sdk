import type { account_detail } from './account_detail';
export type account_show_response = account_detail & {
  latest_chatwoot_version?: string | null;
  subscribed_features?: Array<string>;
};
