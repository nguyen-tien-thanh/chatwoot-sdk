export type contact_detail = {
  additional_attributes?: {
    city?: string;
    country?: string;
    country_code?: string | null;
    created_at_ip?: string;
  };
  custom_attributes?: Record<string, any>;
  email?: string;
  id?: number;
  identifier?: string | null;
  name?: string;
  phone_number?: string | null;
  thumbnail?: string;
  blocked?: boolean;
  type?: contact_detail.type;
};
export namespace contact_detail {
  export enum type {
    CONTACT = 'contact',
  }
}
