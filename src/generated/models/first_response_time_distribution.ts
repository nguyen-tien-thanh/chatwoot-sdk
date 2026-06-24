export type first_response_time_distribution = Record<
  string,
  {
    '0-1h'?: number;
    '1-4h'?: number;
    '4-8h'?: number;
    '8-24h'?: number;
    '24h+'?: number;
  }
>;
