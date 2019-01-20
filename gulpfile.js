const gulp = require("gulp");
const watch = require("gulp-watch");
const babel = require("gulp-babel");
// const rollup = require("gulp-rollup");
// const replace = require("rollup-plugin-replace");
const eslint = require('gulp-eslint');//检查代码中的报错，以及不需要的代码
//开发环境的gulpßß
gulp.task("builddev", () => {
        gulp.src('src/nodeuii/**/*.js')
            .pipe(babel({
                "babelrc": false,
                "plugins": ["transform-es2015-modules-commonjs"]
            }))
            .pipe(gulp.dest('dist'))
});
//生产环境的gulpßß
gulp.task("buildprod", () => {
        gulp.src('src/nodeuii/**/*.js')
            .pipe(babel({
                "babelrc": false,
               // "ignore":["./src/nodeuii/config/index.js"],
             "plugins": ["transform-es2015-modules-commonjs"]
            }))
            .pipe(gulp.dest('dist'))

});
//lint环境的gulpßß
gulp.task("lint", () => {
     gulp.src('src/nodeuii/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());

});
let _task = ["builddev"];
if (process.env.NODE_ENV == "production") {
    _task = ["buildprod"]
}
if (process.env.NODE_ENV == "lint") {
    _task = ["lint"]
}
//gulp切换
gulp.task("default", _task);