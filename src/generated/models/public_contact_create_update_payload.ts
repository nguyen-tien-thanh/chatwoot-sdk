export type public_contact_create_update_payload = {
  identifier?: string;
  identifier_hash?: string;
  email?: string;
  name?: string;
  phone_number?: string;
  avatar?: Blob;
  custom_attributes?: Record<string, any>;
};
