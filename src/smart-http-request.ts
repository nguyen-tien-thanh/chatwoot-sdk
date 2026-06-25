import type { ApiRequestOptions } from './generated/core/ApiRequestOptions';
import { BaseHttpRequest } from './generated/core/BaseHttpRequest';
import type { CancelablePromise } from './generated/core/CancelablePromise';
import type { OpenAPIConfig } from './generated/core/OpenAPI';
import { request as baseRequest } from './generated/core/request';
import { bodyContainsFiles, bodyToFormFields } from './multipart';

function withMultipartConversion(
  options: ApiRequestOptions,
): ApiRequestOptions {
  if (options.formData) {
    return options;
  }

  if (!options.body || typeof options.body !== 'object') {
    return options;
  }

  if (!bodyContainsFiles(options.body)) {
    return options;
  }

  return {
    ...options,
    body: undefined,
    mediaType: undefined,
    formData: bodyToFormFields(options.body as Record<string, unknown>),
  };
}

export class SmartAxiosHttpRequest extends BaseHttpRequest {
  constructor(config: OpenAPIConfig) {
    super(config);
  }

  public override request<T>(
    options: ApiRequestOptions,
  ): CancelablePromise<T> {
    return baseRequest(this.config, withMultipartConversion(options));
  }
}
