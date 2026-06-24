export type channel_summary = Record<
  string,
  {
    open?: number;
    resolved?: number;
    pending?: number;
    snoozed?: number;
    total?: number;
  }
>;
