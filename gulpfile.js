var browserSync = require('browser-sync').create();
const gulp = require('gulp');
const sass = require('gulp-sass');
const jade = require('gulp-jade');
const data = require('gulp-data');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
const optionJade = require('./app/js/variable.js');

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.sass')
        .pipe(sass().on('error', gutil.log))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
gulp.task('templates', function() {
    gulp.src('app/template/**/*.jade')
        .pipe(jade({
            pretty: true
        }).on('error', gutil.log))
        .pipe(gulp.dest('build'))
})

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'build',
        },
        browser: "google-chrome"
    })
})
gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('app/scss/**/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/template/**/*.jade', ['templates']);
    gulp.watch('app/js/**/*.js', browserSync.reload);
})
