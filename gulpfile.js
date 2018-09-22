var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

gulp.task('sass', function () {
  return gulp
    .src("./assets/styles/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(uglifycss({ uglyComments: true }))
    .pipe(gulp.dest("./public/css"));
});
//
gulp.task('run', ['sass']);

gulp.task('watch', function(){
  gulp.watch('./assets/styles/*.scss', ['sass']);
});

gulp.task('default', ['run', 'watch']);