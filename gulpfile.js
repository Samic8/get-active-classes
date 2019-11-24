const gulp = require("gulp");
const rollup = require("rollup");
const rollupTypescript = require("rollup-plugin-typescript");

gulp.task("default", () => {
  return rollup
    .rollup({
      input: "./src/get-active-classes.ts",
      plugins: [rollupTypescript()]
    })
    .then(bundle => {
      return bundle.write({
        file: "./get-active-classes.js",
        format: "umd",
        name: "get-active-classes",
        sourcemap: true
      });
    });
});
