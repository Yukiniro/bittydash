import { rm } from "fs/promises";

await rm("./dist", { force: true, recursive: true });
await rm("./types", { force: true, recursive: true });
