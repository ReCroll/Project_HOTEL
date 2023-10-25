// import fileinclude from "gulp-file-include";
import fileInclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import pug from "gulp-pug";

export const html = () => {
  return (
    app.gulp
      .src(app.path.src.html)
      .pipe(fileInclude())
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>",
          })
        )
      )
      // .pipe(fileInclude())
      .pipe(
        pug({
          // зтиснення HTML файлу
          pretty: true,
          // показуємо в терміналі який файл опрацьовано
          verbose: true,
        })
      )
      .pipe(app.plugins.replace(/@img\//g, "img/"))
      .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
      .pipe(
        app.plugins.if(
          app.isBuild,
          versionNumber({
            value: "%DT%",
            append: {
              key: "_v",
              cover: 0,
              to: ["css", "js"],
            },
            output: {
              file: "gulp/version.json",
            },
          })
        )
      )
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browsersync.stream())
  );
};
// import gulpplugin from "gulp-file-include";

// export const html = () => {
// 	return app.gulp.src(app.path.src.html)
// 	.pipe(gulpplugin())
// 	.pipe(app.gulp.dest(app.path.build.html))
// }
