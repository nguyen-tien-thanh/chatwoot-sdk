import type { reporting_event } from './reporting_event';
import type { reporting_event_meta } from './reporting_event_meta';
export type reporting_events_list_response = {
  meta?: reporting_event_meta;
  payload?: Array<reporting_event>;
};
