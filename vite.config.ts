import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    rootDir: './src',
    useAtomics: true,
    setupFiles: './src/test/setup.tsx',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    coverage: {
      provider: 'istanbul',
      dir: './coverage',
      reporters: ['lcov', 'text'],
      include: ['src/**/*.{js,jsx,ts,tsx}'],
    },
  }
});
