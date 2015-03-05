'use strict';

var gulp, esformatter, esformatterOptions, eol, jshint, jscs, mocha, scripts;

gulp = require('gulp');
esformatter = require('gulp-esformatter');
esformatterOptions = JSON.parse(require('fs').readFileSync('./.esformatter'));
eol = require('gulp-eol');
jshint = require('gulp-jshint');
jscs = require('gulp-jscs');
mocha = require('gulp-mocha');
scripts = [
  './*.js', 'routes/*.js', './test/*.js', './test/mocks/*.js'
];

gulp.task('format', function () {
  return gulp.src(scripts, {
    base: './'
  })
    .pipe(eol('\n', true))
    .pipe(esformatter(esformatterOptions))
    .pipe(gulp.dest('.'));
});

gulp.task('style-check', function () {
  return gulp.src(scripts)
    .pipe(jscs());
});

gulp.task('lint', [ 'style-check' ], function () {
  return gulp.src(scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test', [ 'lint' ], function () {
  return gulp.src('test/*.js', {
  read: false })
    .pipe(mocha());
});

gulp.task('watch', [ 'format' ], function () {
  gulp.watch(scripts, [ 'test' ]);
});

gulp.task('default', [ 'watch' ]);
