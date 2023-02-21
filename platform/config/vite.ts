import { UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export const defaultConfig: UserConfig = {
  plugins: [react()]
};
