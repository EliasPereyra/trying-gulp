import { src, dest, series, parallel } from "gulp";
import gulpSass from "gulp-sass";
import * as sass from "sass";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import browserSync from "browser-sync";

function compileSass() {
  const compileSass = gulpSass(sass);
  return src("src/*.scss")
    .pipe(compileSass())
    .pipe(dest("src"))
    .pipe(browserSync.stream());
}

function minifyAndConcatCss() {
  return src(["src/*.css"])
    .pipe(concat("styles.css"))
    .pipe(dest("dist/css"))
    .pipe(browserSync.stream());
}

function minifyAndConcatJs() {
  return src(["src/*.js"])
    .pipe(concat("script.js"))
    .pipe(uglify())
    .pipe(dest("dist/js"))
    .pipe(browserSync.stream());
}

export default series(
  parallel(compileSass, minifyAndConcatCss, minifyAndConcatJs)
);
