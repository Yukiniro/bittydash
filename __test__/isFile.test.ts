// @vitest-environment jsdom
import { expect, test } from "vitest";
import { isFile } from "../src";

test("isFile", () => {
  expect(isFile(new File([new ArrayBuffer(1)], "a.txt"))).toBe(true);
});
