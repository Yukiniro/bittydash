import { expect, test } from "vitest";
import { sleep } from "../src";

test("sleep error", async () => {
  await expect(sleep(null)).rejects.toThrow("Time must be a number");
});

test("sleep", async () => {
  await expect(sleep(50)).resolves.toBeUndefined();
});
