export type user_create_update_payload = {
  name?: string;
  display_name?: string;
  email?: string;
  password?: string;
  custom_attributes?: Record<string, any>;
};
