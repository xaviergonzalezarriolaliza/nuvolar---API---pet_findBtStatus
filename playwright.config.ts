import { defineConfig } from '@playwright/test';

export default defineConfig({
  // Store test artifacts (traces, screenshots) in a separate folder to avoid conflicts
  outputDir: 'test-results/artifacts',

  use: {
    baseURL: 'https://petstore.swagger.io/v2',
  },

  reporter: [
    ['html', {
      // Timestamped folder directly under test-results
      outputFolder: `test-results/html-report-${new Date().toISOString().replace(/[:.]/g, '-')}`,
      open: 'always'   // Opens the report automatically after the run
    }],
    ['list']
  ],
});