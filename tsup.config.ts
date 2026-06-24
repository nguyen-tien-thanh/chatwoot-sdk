import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: false,
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: false,
  tsconfig: 'tsconfig.build.json',
  external: ['axios', 'form-data', '@nestjs/common'],
});
