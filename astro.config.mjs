import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: "https://www.rushilrai.me",
    outDir: './build',
    prefetch: {
        prefetchAll: true
    },
    vite: {
        plugins: [tailwindcss()]
    }
});