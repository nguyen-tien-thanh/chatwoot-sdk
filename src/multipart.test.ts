import { describe, expect, it } from 'vitest';
import {
  bodyContainsFiles,
  bodyToFormFields,
  isFileLike,
  isFormDataFileValue,
  normalizeFileUpload,
  type FormDataFileValue,
} from './multipart';

describe('multipart', () => {
  it('detects file-like values', () => {
    const buffer = Buffer.from('hello');

    expect(isFileLike(buffer)).toBe(true);
    expect(
      isFileLike({
        data: buffer,
        filename: 'test.png',
        contentType: 'image/png',
      }),
    ).toBe(true);
    expect(isFileLike('not-a-file')).toBe(false);
  });

  it('detects files nested in request bodies', () => {
    expect(
      bodyContainsFiles({
        content: 'hi',
        message_type: 'outgoing',
      }),
    ).toBe(false);

    expect(
      bodyContainsFiles({
        content: 'hi',
        attachments: [Buffer.from('file')],
      }),
    ).toBe(true);

    expect(
      bodyContainsFiles({
        name: 'Jane',
        avatar: {
          data: Buffer.from('avatar'),
          filename: 'avatar.jpg',
        },
      }),
    ).toBe(true);
  });

  it('maps message attachments to attachments[] form fields', () => {
    const file = {
      data: Buffer.from('image'),
      filename: 'sticker.png',
      contentType: 'image/png',
    };

    const fields = bodyToFormFields({
      content: 'sticker',
      message_type: 'outgoing',
      source_id: 'zalo-123',
      private: false,
      attachments: [file],
    });

    expect(fields.content).toBe('sticker');
    expect(fields.message_type).toBe('outgoing');
    expect(fields.source_id).toBe('zalo-123');
    expect(fields.private).toBe(false);
    expect(fields['attachments[]']).toHaveLength(1);
    const attachment = (fields['attachments[]'] as FormDataFileValue[])[0];
    expect(isFormDataFileValue(attachment)).toBe(true);
    expect(normalizeFileUpload(file)).toEqual(attachment);
  });

  it('maps contact avatar to a top-level avatar field', () => {
    const avatar = {
      data: Buffer.from('avatar'),
      filename: 'avatar.jpg',
      contentType: 'image/jpeg',
    };

    const fields = bodyToFormFields({
      inbox_id: 2,
      name: 'Jane Doe',
      avatar,
    });

    expect(fields.inbox_id).toBe(2);
    expect(fields.name).toBe('Jane Doe');
    expect(isFormDataFileValue(fields.avatar)).toBe(true);
  });

  it('stringifies nested metadata objects', () => {
    const fields = bodyToFormFields({
      content: 'hi',
      content_attributes: { in_reply_to: 1 },
    });

    expect(fields.content_attributes).toBe(JSON.stringify({ in_reply_to: 1 }));
  });
});
