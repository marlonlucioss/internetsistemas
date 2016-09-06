var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css');

gulp.task('generateJs', function () {
    gulp.src('src/assets/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js/'));
});

gulp.task('generateCss', function () {
    gulp.src('src/assets/scss/**/*')
        .pipe(concat('all.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/assets/css/'));
});

gulp.task('generateHtml', function () {
    gulp.src('src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('generateImg', function () {
    gulp.src('src/assets/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/img/'));
});

gulp.task('watch', function () {
    gulp.watch('src/assets/js/**/*.js', ['generateJs']);
    gulp.watch('src/assets/img/**/*', ['generateImg']);
    gulp.watch('src/assets/scss/**/*', ['generateCss']);
    gulp.watch('src/*.html', ['generateHtml']);
});

gulp.task('default', ['generateJs','generateImg','generateCss','generateHtml']);