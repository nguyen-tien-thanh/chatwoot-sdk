export type conversation_status_toggle = {
  meta?: Record<string, any>;
  payload?: {
    success?: boolean;
    current_status?: conversation_status_toggle.current_status;
    conversation_id?: number;
  };
};
export namespace conversation_status_toggle {
  export enum current_status {
    OPEN = 'open',
    RESOLVED = 'resolved',
  }
}
