// Terminal Process
1. cd to "Project folder"
2. run "$ npm init"

// Bootstrap
3. run "$ npm install bootstrap"  or
       "$ gem install bootstrap -v 4.1.3" or
       "$ composer require twbs/bootstrap:4.1.3"

// Gulpjs
4. run "$ npm install gulp-cli -g"
5. run "$ npm install gulp -D"
6. run "$ touch gulpfile.js"

// Gulp-sass
- "$ npm install gulp-sass --save-dev" or "$ sudo npm install gulp-sass --save-dev"

// Usage
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

// Gulp-uglifyCSS
- "$ npm install --save gulp-uglifycss" or "$ sudo npm install --save gulp-uglifycss"

// Usage
var uglifycss = require('gulp-uglifycss');

gulp.task('css', function () {
  gulp.src('./styles/**/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});

// Gulp watch
gulp.task('default',function() {
    gulp.watch('./assets/stylesheets/*.scss',['sass']);
});



Ref: http://thesassway.com/beginner/how-to-structure-a-sass-project
Ref: https://www.sitepoint.com/5-useful-sass-mixins-bootstrap/
stylesheets/
|
|-- base/
|   |-- _utility.scss
|   |-- _base.scss           # imports for all mixins + global project variables
|   ...
|
|-- Partials/
|   |-- _forms.scss
|   |-- _buttons.scss
|   |-- _card.scss
|   |-- _figures.scss
|   |-- _grids.scss
|   |-- _typography.scss
|   ...
|
|-- Modules/
|   |-- _header.scss
|   |-- _sidebar.scss
|   |-- _footer.scss
|   ...
|
|-- page/
|-- |-- about-us.scss
|-- |-- contact-us.scss
|-- ...
|-- style.scss              # primary Sass file
