import fs from 'fs/promises';
import { defineConfig } from 'vite';
import { defaultConfig } from '../../platform/config/vite';

export default defineConfig({
  ...defaultConfig,
  esbuild: {
    loader: 'tsx',
    include: /\/.*\.[tj]sx?$/,
    exclude: []
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: 'load-js-files-as-jsx',
          setup(build) {
            build.onLoad({ filter: /\/.*\.js$/ }, async args => ({
              loader: 'jsx',
              contents: await fs.readFile(args.path, 'utf8')
            }));
          }
        }
      ]
    }
  }
});
