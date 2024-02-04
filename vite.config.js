import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
             'resources/css/app.css',
             'resources/js/app.js', 
             'resources/css/fontiran.css',
             'resources/css/footer.css',
             'resources/css/sidebar.css',
             'resources/css/slider.css',
             'resources/js/footer-slider.js',
             'resources/js/main-slider.js',
             'resources/js/search-bar.js',
             'resources/js/sidebar.js',
             'resources/js/statistic.js',
             'resources/js/topics-slider.js',
             'resources/js/documentary-slider.js',
             'resources/css/article.css',
             'resources/css/fontirannum.css',
             
            ],
            refresh: true,
        }),
    ],
});
