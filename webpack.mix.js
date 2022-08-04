const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath('public');
mix.setResourceRoot('../../');
mix.options({
    processCssUrls: true
});

/**
 * Third Party Libraries Compile files
 */
mix.sass('resources/sass/vendor/datepicker.scss', 'public/vendor/bootstrap-datepicker')
    .js('resources/js/vendor/datepicker.js', 'public/vendor/bootstrap-datepicker');

mix.sass('resources/sass/vendor/select2.scss', 'public/vendor/select2')
    .js('resources/js/vendor/select2.js', 'public/vendor/select2');

mix.js('resources/js/vendor/sweetalert2.js', 'public/vendor/sweetalert2');

mix.js('resources/js/vendor/jquery.inputmask.js', 'public/vendor/inputmask')
    .js('resources/js/vendor/tinymce/tinymce.js', 'public/js');

mix.js('resources/js/vendor/highcharts.js', 'public/vendor/highcharts');

mix.js('resources/js/vendor/jquery.steps.js', 'public/vendor/jquery-steps');


mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/icons.scss', 'public/css')
    .sass('resources/sass/bootstrap.scss', 'public/css')
    .sass('resources/sass/app-dark.scss', 'public/css')
    .sass('resources/sass/bootstrap-dark.scss', 'public/css')
    .vue();

    // .js('resources/js/tinymce.js', 'public/js')
    // .sass('resources/sass/app.scss', 'public/css');

mix.copyDirectory('node_modules/tinymce/skins', 'public/js/skins')
    .copy('node_modules/highcharts/modules/data.js', 'public/vendor/highcharts/modules')
    .copy('node_modules/highcharts/modules/exporting.js', 'public/vendor/highcharts/modules')
    .copy('node_modules/highcharts/modules/accessibility.js', 'public/vendor/highcharts/modules');

mix.sourceMaps(! mix.inProduction());

if (mix.inProduction()) {
    mix.version();
    mix.disableNotifications();
}
