'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
    return gulp.src('*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('../css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('*.scss', ['sass']);
});

gulp.task('default', function() {
    gulp.run('sass', 'sass:watch');
    gulp.watch('*.scss', function(event) {
        gulp.run('sass');
    })
});
