import { babel } from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import fileSize from "rollup-plugin-filesize"
import { readFile } from "fs/promises";

const json = await readFile("./package.json", "utf8");
const libraryName = JSON.parse(json).name || "my-project";

export default {
  input: "src/index.ts",
  output: [
    {
      file: `./dist/${libraryName}.cjs.js`,
      format: "cjs",
    },
    {
      file: `./dist/${libraryName}.esm.js`,
      format: "esm",
    },
  ],
  plugins: [
    typescript({ useTsconfigDeclarationDir: true, clean: true }),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env"],
    }),
    fileSize(),
  ],
};
