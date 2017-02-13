const gulp = require('gulp');
const postcss = require('gulp-postcss');

var processors = [
        require('postcss-mixins'),
        require('postcss-simple-vars'),
        require('postcss-nested'),
        function(css) {
            css.eachDecl(function(decl) {
                decl.cloneBefore({ prop: '-pikachu-' + decl.prop });
            });
        }
    ];

gulp.task('css', function() {
    return gulp.src('src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('build/'));
});