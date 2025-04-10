import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    prefetch: {
        prefetchAll: true
    },
    vite: {
        plugins: [tailwindcss()]
    }
});