export type public_message_update_payload = {
  submitted_values?: {
    name?: string;
    title?: string;
    value?: string;
    csat_survey_response?: {
      feedback_message?: string;
      rating?: number;
    };
  };
};
