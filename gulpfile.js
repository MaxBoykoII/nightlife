var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jsFiles = ['.*js', 'public/js/**/*.js'];
var jscs = require('gulp-jscs');

gulp.task('style', function() {
    gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});

gulp.task('inject', function() {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');

    var injectSrc = gulp.src(['./public/css/*.css'], {
        read: false
    });

    var injectOptions = {
        ignorePath: '/public'
    };
    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib'
    };
    return gulp.src('./public/index.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./public'));
});
