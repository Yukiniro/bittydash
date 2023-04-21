// @vitest-environment jsdom
import { expect, test } from "vitest";
import { isBlob } from "../src";

test("isBlob", () => {
  expect(isBlob(new Blob([new ArrayBuffer(1)]))).toBe(true);
});
