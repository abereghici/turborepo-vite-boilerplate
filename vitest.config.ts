/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './platform/vite-config/setupTests.ts',
    exclude: ['**/node_modules/**', '**/__e2e_tests__/**'],
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
    // https://github.com/vitest-dev/vitest/issues/1674
    ...(process.env.CI && {
      minThreads: 4,
      maxThreads: 4
    })
  }
});
