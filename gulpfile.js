import { src, dest, series, parallel } from "gulp";
import gulpSass from "gulp-sass";
import * as sass from "sass";
import browserSync from "browser-sync";

function compileSass() {
  const compileSass = gulpSass(sass);
  return src("src/*.scss")
    .pipe(compileSass())
    .pipe(dest("src"))
    .pipe(browserSync.stream());
}

export default series(parallel(compileSass));
