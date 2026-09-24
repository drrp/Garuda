import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  // The 'define' block has been removed.
  // The Google Client ID is now handled directly within the LoginPage.tsx component
  // as a workaround for environments that do not support .env files.
});