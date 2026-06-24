export type audit_log = {
  id?: number;
  auditable_id?: number;
  auditable_type?: string;
  auditable?: Record<string, any>;
  associated_id?: number;
  associated_type?: string;
  user_id?: number;
  user_type?: string;
  username?: string;
  action?: audit_log.action;
  audited_changes?: Record<string, any>;
  version?: number;
  comment?: string | null;
  request_uuid?: string;
  created_at?: number;
  remote_address?: string | null;
};
export namespace audit_log {
  export enum action {
    CREATE = 'create',
    UPDATE = 'update',
    DESTROY = 'destroy',
  }
}
