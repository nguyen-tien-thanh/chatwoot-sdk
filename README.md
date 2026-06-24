# @nguyen-tien-thanh/chatwoot-sdk

TypeScript SDK for the [Chatwoot](https://www.chatwoot.com/) API.

## Install

```bash
npm install @nguyen-tien-thanh/chatwoot-sdk
# or
pnpm add @nguyen-tien-thanh/chatwoot-sdk
```

## Usage

```ts
import { ChatwootClient } from '@nguyen-tien-thanh/chatwoot-sdk';

const client = new ChatwootClient({
  baseUrl: 'https://app.chatwoot.com',
  apiAccessToken: process.env.CHATWOOT_API_TOKEN!,
});
```

## Development

```bash
pnpm install
pnpm build
pnpm test
```

## Publish to npm

1. Create an account at [npmjs.com](https://www.npmjs.com/) if you don't have one.
2. Log in locally:

   ```bash
   npm login
   ```

3. For scoped packages (`@nguyen-tien-thanh/...`), ensure the package is public (already set in `publishConfig`).
4. Build and publish:

   ```bash
   pnpm build
   npm publish --access public
   ```

   Or use the shortcut script:

   ```bash
   pnpm publish:npm
   ```

## License

ISC
