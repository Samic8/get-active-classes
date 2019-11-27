const gulp = require("gulp");
const rollup = require("rollup");
const rollupTypescript = require("rollup-plugin-typescript2");

gulp.task("default", () => {
  return rollup
    .rollup({
      input: "./src/get-active-classes.ts",
      plugins: [
        rollupTypescript({ declarationDir: process.cwd(), declaration: true })
      ]
    })
    .then(bundle => {
      writeFile(bundle, "es");
      writeFile(bundle, "cjs");
    });
});

function writeFile(bundle, format) {
  return bundle.write({
    file: `./get-active-classes.${format}.js`,
    format,
    name: "get-active-classes",
    sourcemap: true
  });
}
