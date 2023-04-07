import { expect, test } from "vitest";
import { sleep } from "../src";

test("sleep error", async () => {
  await expect(sleep(null as unknown as number)).rejects.toThrow(
    `sleep: parameter \`time\` expected to be a number, but got "object"`
  );
});

test("sleep", async () => {
  await expect(sleep(50)).resolves.toBeUndefined();
});
