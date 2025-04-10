import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    outDir: './build',
    prefetch: {
        prefetchAll: true
    },
    vite: {
        plugins: [tailwindcss()]
    }
});