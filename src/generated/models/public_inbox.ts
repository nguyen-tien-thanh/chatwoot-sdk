export type public_inbox = {
  identifier?: string;
  name?: string;
  timezone?: string;
  working_hours?: Array<{
    day_of_week?: number;
    open_all_day?: boolean;
    closed_all_day?: boolean;
    open_hour?: number;
    open_minutes?: number;
    close_hour?: number;
    close_minutes?: number;
  }>;
  working_hours_enabled?: boolean;
  csat_survey_enabled?: boolean;
  greeting_enabled?: boolean;
  identity_validation_enabled?: boolean;
};
