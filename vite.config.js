import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({

    plugins: [
        laravel({
            input: ['assets/scss/app.scss', 'assets/js/app.js'],
            refresh: false
        })
    ],

    build: {
        minify: false,
        sourcemap: true,
        rollupOptions: {
            output: {
                entryFileNames: 'app.js',
                assetFileNames: 'app.css'
            }
        }
    }

})