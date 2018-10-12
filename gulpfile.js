var gulp = require('gulp');
var sass = require('gulp-sass');
//var uglifycss = require('gulp-uglifycss');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp
    //.src(["./assets/styles/*.scss", "./assets/styles/**/*.scss"])
    .src("./assets/styles/*.scss")
    .pipe(sass().on("error", sass.logError))
    //.pipe(uglifycss({ uglyComments: true }))
    .pipe(gulp.dest("./public/css"))
    .pipe(browserSync.stream());
});

// Static Server
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

//
gulp.task('run', ['sass']);

gulp.task('watch', function(){
  gulp.watch(["./assets/styles/*.scss", "./assets/styles/**/*.scss"], ['sass']);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['run', 'watch', 'browser-sync']);