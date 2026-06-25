export type ChatwootFileUpload = Blob | File | {
  data: ArrayBuffer | Uint8Array | Buffer;
  filename: string;
  contentType?: string;
};

export type FormDataFileValue = {
  readonly __chatwootFile: true;
  value: Buffer | Blob;
  filename: string;
  contentType?: string;
};

export function isFileUploadDescriptor(
  value: unknown,
): value is Extract<ChatwootFileUpload, { data: unknown; filename: string }> {
  return (
    value !== null &&
    typeof value === 'object' &&
    'data' in value &&
    'filename' in value &&
    typeof (value as { filename: unknown }).filename === 'string'
  );
}

export function isFileLike(value: unknown): value is ChatwootFileUpload {
  if (value === null || value === undefined) {
    return false;
  }

  if (typeof Blob !== 'undefined' && value instanceof Blob) {
    return true;
  }

  if (typeof File !== 'undefined' && value instanceof File) {
    return true;
  }

  if (typeof Buffer !== 'undefined' && Buffer.isBuffer(value)) {
    return true;
  }

  return isFileUploadDescriptor(value);
}

export function isFormDataFileValue(value: unknown): value is FormDataFileValue {
  return (
    value !== null &&
    typeof value === 'object' &&
    (value as FormDataFileValue).__chatwootFile === true
  );
}

export function bodyContainsFiles(body: unknown): boolean {
  if (body === null || body === undefined) {
    return false;
  }

  if (isFileLike(body)) {
    return true;
  }

  if (Array.isArray(body)) {
    return body.some((item) => bodyContainsFiles(item));
  }

  if (typeof body !== 'object') {
    return false;
  }

  return Object.values(body).some((value) => {
    if (value === undefined || value === null) {
      return false;
    }

    return bodyContainsFiles(value);
  });
}

export function normalizeFileUpload(
  file: ChatwootFileUpload,
): Blob | Buffer | FormDataFileValue {
  if (isFileUploadDescriptor(file)) {
    const value = toBuffer(file.data);

    return {
      __chatwootFile: true,
      value,
      filename: file.filename,
      contentType: file.contentType,
    };
  }

  return file;
}

function toBuffer(data: ArrayBuffer | Uint8Array | Buffer): Buffer {
  if (Buffer.isBuffer(data)) {
    return data;
  }

  if (data instanceof Uint8Array) {
    return Buffer.from(data);
  }

  return Buffer.from(new Uint8Array(data));
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

export function bodyToFormFields(
  body: Record<string, unknown>,
  prefix = '',
): Record<string, unknown> {
  const fields: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(body)) {
    if (value === undefined || value === null) {
      continue;
    }

    const fieldKey = prefix ? `${prefix}[${key}]` : key;

    if (isFileLike(value)) {
      fields[fieldKey] = normalizeFileUpload(value);
      continue;
    }

    if (key === 'attachments' && Array.isArray(value)) {
      fields['attachments[]'] = value.map((file) =>
        normalizeFileUpload(file as ChatwootFileUpload),
      );
      continue;
    }

    if (Array.isArray(value)) {
      fields[fieldKey] = JSON.stringify(value);
      continue;
    }

    if (isPlainObject(value)) {
      if (!prefix && key === 'profile') {
        Object.assign(
          fields,
          bodyToFormFields(value, 'profile'),
        );
      } else {
        fields[fieldKey] = JSON.stringify(value);
      }
      continue;
    }

    fields[fieldKey] = value;
  }

  return fields;
}
