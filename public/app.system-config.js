System.config({
    map: {
        'handlebars': 'vendor/handlebars.runtime.min.js',
        'app': 'js/',
        'firebase': 'vendor/firebase'
    },
    meta: {
        'vendor/handlebars.runtime.min.js': {
            format: 'global',
            exports: 'Handlebars'
        }
    },
    packages: {
        'firebase': {
            main: 'firebase-browser.js',
            defaultExtension: 'js'
        },
        'app': {
            main: 'app.main.js',
            defaultExtension: 'js'
        }
    }
});
