export type inbox_create_email_channel_payload = {
  type: inbox_create_email_channel_payload.type;
  email: string;
  imap_enabled?: boolean;
  imap_login?: string;
  imap_password?: string;
  imap_address?: string;
  imap_port?: number;
  imap_enable_ssl?: boolean;
  imap_authentication?: string;
  smtp_enabled?: boolean;
  smtp_login?: string;
  smtp_password?: string;
  smtp_address?: string;
  smtp_port?: number;
  smtp_domain?: string;
  smtp_enable_starttls_auto?: boolean;
  smtp_enable_ssl_tls?: boolean;
  smtp_openssl_verify_mode?: string;
  smtp_authentication?: string;
  provider?: string;
  verified_for_sending?: boolean;
};
export namespace inbox_create_email_channel_payload {
  export enum type {
    EMAIL = 'email',
  }
}
