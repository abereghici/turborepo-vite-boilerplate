import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
// Why relative imports? -> https://github.com/vitejs/vite/issues/5370
import { defaultConfig } from '../../platform/config/vite';

// https://vitejs.dev/config/
export default defineConfig({
  ...defaultConfig,
  plugins: [react(), splitVendorChunkPlugin()]
});
