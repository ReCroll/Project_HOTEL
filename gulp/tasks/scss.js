import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

import cleanCss from "gulp-clean-css"; // Зменшує розмір файла
import webpcss from "gulp-webpcss"; //виводить WEBP зображення
import autoprefixer from "gulp-autoprefixer"; // додавання вендорних префіксів
import groupCssMediaQueries from "gulp-group-css-media-queries"; // групування медія запитів

const sass = gulpSass(dartSass);

export const scss = () => {
  return (
    app.gulp
      .src(app.path.src.scss, { sourcemaps: app.isDev })
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>",
          })
        )
      )
      .pipe(app.plugins.replace(/@img\//g, "../img/"))
      .pipe(
        sass({
          outputStyle: "expanded",
        })
      )
      .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
      .pipe(
        app.plugins.if(
          app.isBuild,
          autoprefixer({
            grid: true,
            overrideBrowserList: ["list 3 versions"],
            cascade: true,
          })
        )
      )
      .pipe(
        app.plugins.if(
          app.isBuild,
          webpcss({
            webpClass: ".webp",
            noWebpClass: ".no-webp",
          })
        )
      )
      // розкоментувати якщо потрібний не зжатий дубльований файл
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.if(app.isBuild, cleanCss()))
      .pipe(
        rename({
          extname: ".min.css",
        })
      )
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browsersync.stream())
  );
};

// .pipe(groupCssMediaQueries())
// .pipe(webpcss(
// 	{
// 		webpClass: ".webp",
// 		noWebpClass: ".no-webp"
// 	}
// ))
// .pipe(autoprefixer({
// 	grid: true,
// 	overrideBrowserlist: ["last 3 versions"],
// 	cascade: true
// }))
