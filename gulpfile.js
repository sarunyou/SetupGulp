var browserSync = require('browser-sync').create();
const gulp = require('gulp');
const sass = require('gulp-sass');
const jade = require('gulp-jade');

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});
gulp.task('templates', function() {
  gulp.src('app/template/**/*.jade')
  .pipe(jade({
    pretty: true
  })
)
  .pipe(gulp.dest('app'))
  .pipe(browserSync.reload({
    stream: true
  }))
})
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  })
})
gulp.task('watch',['browserSync', 'sass'], function() {
  gulp.watch('app/scss/**/*.sass', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/template/**/*.jade', ['templates']);
  gulp.watch('app/js/**/*.js', browserSync.reload);
})
