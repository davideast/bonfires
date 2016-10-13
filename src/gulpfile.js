const gulp = require('gulp');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const uncss = require('gulp-uncss');

gulp.task('uncss', function () {
  return gulp.src('css/*.css')
    .pipe(uncss({
      html: ['../public/index.html']
    }))
    .pipe(gulp.dest('../public/css'));
});

gulp.task('copy:root', () => gulp
  .src([

  ])
  .pipe(gulp.dest('../public')
));

gulp.task('copy:firebase:vendor', () => 
  gulp.src([
    'node_modules/firebase/*.js', 
    'node_modules/firebase/*/**.js', 
  ])
  .pipe(gulp.dest('../public/vendor/firebase'))
);

gulp.task('copy:js:vendor', ['copy:firebase:vendor'], () => gulp
  .src([
    'node_modules/handlebars/dist/handlebars.runtime.min.js',
    'node_modules/material-design-lite/material.min.js',
    'node_modules/systemjs/dist/system.js',
    'node_modules/systemjs/dist/system.js.map'
  ])
  .pipe(gulp.dest('../public/vendor'))
);

gulp.task('copy:css', () => gulp
  .src([
    'css/styles.css',
    'css/material.blue-orange.min.css'
  ])
  .pipe(gulp.dest('../public/css'))
);

gulp.task('copy:images', () => gulp
  .src([
    'images/**/*'
  ])
  .pipe(gulp.dest('../public/images'))
);

gulp.task('compile:handlebars:static', function () {
  const templateData = {
    eventList: [
      {
        imageUrl: 'images/firebase-logo.jpg',
        name: 'Firebase Developer Summit',
        city: 'Berlin',
        country: 'Germany',
        shortDate: 'Nov, 7th',
        description: 'The Firebase Dev Summit is full day event for app developers that will focus on how to use Firebase with your apps.'
      },
      {
        imageUrl: 'images/angularconnect.png',
        name: 'Angular Connect',
        city: 'London',
        country: 'United Kingdom',
        shortDate: 'Sept, 26th',
        description: 'AngularConnect is a two day, two track conference featuring talks from the world\'s best Angular experts.'
      },
      {
        imageUrl: 'images/angularconnect.png',
        name: 'Important Conference',
        city: 'Lexington',
        country: 'United States',
        shortDate: 'Nov, 21st',
        description: 'This is one of the most important conferences ever.'
      },
      {
        imageUrl: 'images/angularconnect.png',
        name: 'Polymer Summit',
        city: 'London',
        country: 'U.K.',
        shortDate: 'Oct, 17th',
        description: 'Join us for two days of talks, codelabs, and breakout sessions from the Polymer team, Googlers, major companies using Polymer and Web Components.'
      }
    ]
  };
  const options = {
    batch: ['templates/partials']
  };
  return gulp.src('./templates/main.handlebars')
    .pipe(handlebars(templateData, options))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('../public'));
});

gulp.task('generate:service-worker', function(callback) {
  const path = require('path');
  const swPrecache = require('sw-precache');
  const rootDir = '../public';

  swPrecache.write(path.join(rootDir, 'service-worker.js'), {
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
    stripPrefix: rootDir
  }, callback);
});

gulp.task('firebase:package', () => 
  gulp
    .src('js/firebase.package.js')
    .pipe(gulp.dest('../public/vendor/firebase'))
);

gulp.task('copy', [
  'compile:handlebars:static', 
  'copy:css', 
  'copy:js:vendor', 
  'copy:images', 
  'firebase:package'
]);

gulp.task('default', ['copy']);