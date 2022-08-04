import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel([
            'resources/sass/app-dark.scss',
            'resources/sass/app.scss',
            'resources/sass/app.scss',
            'resources/sass/bootstrap-dark.scss',
            'resources/sass/bootstrap.scss',
            'resources/sass/icons.scss',
            'resources/sass/vendor/datepicker.scss',
            'resources/sass/vendor/select2.scss',
            'resources/js/app.js',
            'resources/js/tinymce.js',
            'resources/js/vendor/datepicker.js',
            'resources/js/vendor/highcharts.js',
            'resources/js/vendor/jquery.inputmask.js',
            'resources/js/vendor/jquery.steps.js',
            'resources/js/vendor/select2.js',
            'resources/js/vendor/sweetalert2.js',
            'resources/js/vendor/tinymce/tinymce.js',
        ]),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
