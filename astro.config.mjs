// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    image: {
        service: {
            entrypoint: 'astro/assets/services/noop'
        }
    },
    markdown: {
        shikiConfig: {
            theme: 'github-dark',
            wrap: true,
        },
    },
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': '/src'
            }
        }
    },
    site: 'https://heartnet123.github.io'
});
