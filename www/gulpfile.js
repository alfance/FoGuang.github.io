var gulp = require('gulp');
var sass = require('gulp-sass');// Requires the gulp-sass plugin
var nano = require('gulp-cssnano');
var runSequence = require('run-sequence');
var minify = require('gulp-minify');
var concat = require('gulp-concat');

//js path
var paths = {
    // using framework version of jquery
    scripts: [
        // 'app/js/jquery.min.js',
        // 'app/js/bootstrap.min.js',
        // 'app/js/angular.min.js',
        'app/js/app.js',
        'app/js/chap1.js',
        'app/js/animation.js'
    ]
};

//gulp change sass to css
gulp.task('sass', function() {
  return gulp.src('app/scss/main.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});

// Concatenate js
gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
      .pipe(concat('all.js'))
      .pipe(gulp.dest('dist/js'));
});

//gulp compress js
gulp.task('compress', function() {
  gulp.src('dist/js/all.js')
    .pipe(minify({
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '.min.js']
    }))
    .pipe(gulp.dest('dist'))
});

//gulp compress css
gulp.task('nano', function() {
    return gulp.src('app/css/*.css')
        .pipe(nano())
        .pipe(gulp.dest('dist'));
});

//gulp watch
gulp.task('watch', function() {
    gulp.watch('app/js/*.js', ['scripts']);
    gulp.watch('app/scss/*.scss', ['sass']);
  });

//gulp default
gulp.task('default', function (callback) {
  runSequence(['scripts','sass', 'nano','compress'],
    callback
  )
})
