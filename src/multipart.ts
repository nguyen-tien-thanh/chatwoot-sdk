export type ChatwootFileUpload =
  | Blob
  | File
  | {
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

export function isFormDataFileValue(
  value: unknown,
): value is FormDataFileValue {
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
): Buffer | FormDataFileValue {
  if (isFileUploadDescriptor(file)) {
    return {
      __chatwootFile: true,
      value: toBuffer(file.data),
      filename: file.filename,
      contentType: file.contentType,
    };
  }

  if (typeof Buffer !== 'undefined' && Buffer.isBuffer(file)) {
    return file;
  }

  throw new Error(
    'ChatwootFileUpload on Node.js must use Buffer or { data, filename, contentType }. ' +
      'Browser File/Blob is not compatible with the Node form-data client.',
  );
}

export async function normalizeFileUploadAsync(
  file: ChatwootFileUpload,
): Promise<Buffer | FormDataFileValue> {
  if (isFileUploadDescriptor(file) || Buffer.isBuffer(file)) {
    return normalizeFileUpload(file);
  }

  if (typeof Blob !== 'undefined' && file instanceof Blob) {
    const arrayBuffer = await file.arrayBuffer();
    const filename =
      typeof File !== 'undefined' && file instanceof File
        ? file.name
        : 'upload.bin';

    return {
      __chatwootFile: true,
      value: Buffer.from(arrayBuffer),
      filename,
      contentType: file.type || undefined,
    };
  }

  return normalizeFileUpload(file);
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
  return buildFormFieldsSync(body, prefix, normalizeFileUpload);
}

export async function bodyToFormFieldsAsync(
  body: Record<string, unknown>,
  prefix = '',
): Promise<Record<string, unknown>> {
  return buildFormFields(body, prefix, normalizeFileUploadAsync);
}

async function buildFormFields(
  body: Record<string, unknown>,
  prefix: string,
  normalize: (
    file: ChatwootFileUpload,
  ) => Buffer | FormDataFileValue | Promise<Buffer | FormDataFileValue>,
): Promise<Record<string, unknown>> {
  const fields: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(body)) {
    if (value === undefined || value === null) {
      continue;
    }

    const fieldKey = prefix ? `${prefix}[${key}]` : key;

    if (isFileLike(value)) {
      fields[fieldKey] = await normalize(value);
      continue;
    }

    if (key === 'attachments' && Array.isArray(value)) {
      fields['attachments[]'] = await Promise.all(
        value.map((file) => normalize(file as ChatwootFileUpload)),
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
          await buildFormFields(value, 'profile', normalize),
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

function buildFormFieldsSync(
  body: Record<string, unknown>,
  prefix: string,
  normalize: (file: ChatwootFileUpload) => Buffer | FormDataFileValue,
): Record<string, unknown> {
  const fields: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(body)) {
    if (value === undefined || value === null) {
      continue;
    }

    const fieldKey = prefix ? `${prefix}[${key}]` : key;

    if (isFileLike(value)) {
      fields[fieldKey] = normalize(value);
      continue;
    }

    if (key === 'attachments' && Array.isArray(value)) {
      fields['attachments[]'] = value.map((file) =>
        normalize(file as ChatwootFileUpload),
      );
      continue;
    }

    if (Array.isArray(value)) {
      fields[fieldKey] = JSON.stringify(value);
      continue;
    }

    if (isPlainObject(value)) {
      if (!prefix && key === 'profile') {
        Object.assign(fields, buildFormFieldsSync(value, 'profile', normalize));
      } else {
        fields[fieldKey] = JSON.stringify(value);
      }
      continue;
    }

    fields[fieldKey] = value;
  }

  return fields;
}
