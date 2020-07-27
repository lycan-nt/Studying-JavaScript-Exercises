const { series } = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass");
const uglifycss = require("gulp-uglifycss");
const contat = require("gulp-concat");

function transformcaoCSS() 
{
    return gulp.src("src/sass/index.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(uglifycss({ "uglycomments": true }))
        .pipe(contat("estilo.min.css"))
        .pipe(gulp.dest("build/css"))
}

function copiarHTML()
{
    return gulp.src("src/index.html")
        .pipe(gulp.dest("build/css"))
}
exports.default = series(transformcaoCSS, copiarHTML);