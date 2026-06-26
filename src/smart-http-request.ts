import type { ApiRequestOptions } from './generated/core/ApiRequestOptions';
import { BaseHttpRequest } from './generated/core/BaseHttpRequest';
import { CancelablePromise } from './generated/core/CancelablePromise';
import type { OpenAPIConfig } from './generated/core/OpenAPI';
import { request as baseRequest } from './generated/core/request';
import { bodyContainsFiles, bodyToFormFieldsAsync } from './multipart';

async function withMultipartConversion(
  options: ApiRequestOptions,
): Promise<ApiRequestOptions> {
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
    formData: await bodyToFormFieldsAsync(
      options.body as Record<string, unknown>,
    ),
  };
}

export class SmartAxiosHttpRequest extends BaseHttpRequest {
  constructor(config: OpenAPIConfig) {
    super(config);
  }

  public override request<T>(options: ApiRequestOptions): CancelablePromise<T> {
    return new CancelablePromise<T>((resolve, reject, onCancel) => {
      let requestPromise: CancelablePromise<T> | undefined;

      void withMultipartConversion(options)
        .then((converted) => {
          requestPromise = baseRequest<T>(this.config, converted);
          requestPromise.then(resolve).catch(reject);
        })
        .catch(reject);

      onCancel(() => {
        requestPromise?.cancel();
      });
    });
  }
}
