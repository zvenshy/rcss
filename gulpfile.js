var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  gulp.src('./scss/rcss.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({errLogToConsole: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

gulp.task('compress', function () {
  gulp.src('./css/*.css')
    .pipe(minify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('test', function () {
  gulp.src('./test/scss/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({errLogToConsole: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./test/css'))
});

gulp.task('default', ['sass', 'compress', 'test']);
gulp.watch(['./scss/*.scss', './test/scss/*.scss'], ['sass', 'compress', 'test']);