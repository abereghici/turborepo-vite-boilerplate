import { defineConfig } from '@playwright/test';
import { defaultConfig } from '@monorepo/playwright-config';

export default defineConfig({
  ...defaultConfig,
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI
  }
});
