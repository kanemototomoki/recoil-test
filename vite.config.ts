import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@src', replacement: '/src' }],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [react()],
});
