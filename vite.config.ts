import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'sass'; // Importing sass directly

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        implementation: sass, // Use the sass import directly
        // Uncomment the next line to silence deprecation warnings temporarily
        // sassOptions: { silenceDeprecations: ['legacy-js-api'] },
      },
    },
  },
});
