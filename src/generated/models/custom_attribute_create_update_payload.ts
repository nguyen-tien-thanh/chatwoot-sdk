export type custom_attribute_create_update_payload = {
  attribute_display_name?: string;
  attribute_display_type?: number;
  attribute_description?: string;
  attribute_key?: string;
  attribute_values?: Array<string>;
  attribute_model?: number;
  regex_pattern?: string;
  regex_cue?: string;
};
