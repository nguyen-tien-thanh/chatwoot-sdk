export type inbox_label_matrix = {
  inboxes?: Array<{
    id?: number;
    name?: string;
  }>;
  labels?: Array<{
    id?: number;
    title?: string;
  }>;
  matrix?: Array<Array<number>>;
};
