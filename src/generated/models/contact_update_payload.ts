export type contact_update_payload = {
  name?: string;
  email?: string;
  blocked?: boolean;
  phone_number?: string;
  avatar?: Blob;
  avatar_url?: string;
  identifier?: string;
  additional_attributes?: Record<string, any>;
  custom_attributes?: Record<string, any>;
};
