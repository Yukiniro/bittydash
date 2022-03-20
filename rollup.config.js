import { babel } from "@rollup/plugin-babel";
import fileSize from "rollup-plugin-filesize";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import { readFile } from "fs/promises";

function getConfig(libraryName) {
  return {
    input: "src/index.ts",
    output: [
      {
        file: `./dist/${libraryName}.cjs.min.js`,
        format: "cjs",
      },
      {
        file: `./dist/${libraryName}.min.js`,
        format: "esm",
      },
      {
        file: `./dist/${libraryName}.esm.min.js`,
        format: "esm",
      },
      {
        file: `./dist/${libraryName}.umd.min.js`,
        format: "umd",
        name: libraryName,
      },
    ],
    plugins: [
      typescript(),
      babel({
        babelHelpers: "bundled",
        presets: ["@babel/preset-env"],
      }),
      terser(),
      fileSize(),
    ],
  };
}

export default readFile("./package.json", "utf8")
  .then((json) => {
    const libraryName = JSON.parse(json).name;
    return getConfig(libraryName);
  })
  .catch((e) => {
    console.log(e);
    return getConfig("my-project");
  });
