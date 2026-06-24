export type account_create_update_payload = {
  name?: string;
  locale?: string;
  domain?: string;
  support_email?: string;
  status?: account_create_update_payload.status;
  limits?: Record<string, any>;
  custom_attributes?: Record<string, any>;
};
export namespace account_create_update_payload {
  export enum status {
    ACTIVE = 'active',
    SUSPENDED = 'suspended',
  }
}
