var gulp = require('gulp');
var sass = require('gulp-sass');// Requires the gulp-sass plugin
var nano = require('gulp-cssnano');
var runSequence = require('run-sequence');
var minify = require('gulp-minify');
var concat = require('gulp-concat');

//js path
var paths1 = {
    // using framework version of jquery
    scripts: [
        // 'app/js/jquery.min.js',
        // 'app/js/bootstrap.min.js',
        // 'app/js/angular.min.js',
        'app/js/app.js',
        'app/js/chap1.js'
    ]
};
var paths2 = {
    // using framework version of jquery
    scripts: [
        'app/js/animation.js'
        // 'app/js/modal.js'
        //the animation for sunrise on intro 1 page is included in its page. not this one here
    ]
};

//gulp change sass to css
gulp.task('sass', function() {
  return gulp.src('app/scss/main.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});

// Concatenate js
gulp.task('scripts1', function() {
    return gulp.src(paths1.scripts)
      .pipe(concat('all.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('scripts2', function() {
    return gulp.src(paths2.scripts)
      .pipe(concat('custom-jquery.js'))
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
    gulp.watch('app/js/*.js', ['scripts1','scripts2']);
    gulp.watch('app/scss/*.scss', ['sass']);
  });

//gulp default
gulp.task('default', function (callback) {
  runSequence(['sass', 'nano','scripts1','scripts2','compress'],
    callback
  )
})
