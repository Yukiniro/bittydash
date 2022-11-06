import { test, expect } from "vitest";
import { isArrayBuffer } from "../src";

test("isArrayBuffer", () => {
  expect(isArrayBuffer(0)).toBe(false);
  expect(isArrayBuffer(1)).toBe(false);
  expect(isArrayBuffer(-1)).toBe(false);
  expect(isArrayBuffer(Infinity)).toBe(false);
  expect(isArrayBuffer(-Infinity)).toBe(false);
  expect(isArrayBuffer(NaN)).toBe(false);
  expect(isArrayBuffer("1")).toBe(false);
  expect(isArrayBuffer(undefined)).toBe(false);
  expect(isArrayBuffer(null)).toBe(false);
  expect(isArrayBuffer([])).toBe(false);
  expect(isArrayBuffer({})).toBe(false);
  expect(isArrayBuffer(true)).toBe(false);
  expect(isArrayBuffer(false)).toBe(false);
  expect(isArrayBuffer(() => {})).toBe(false);
  expect(isArrayBuffer(new Set())).toBe(false);
  expect(isArrayBuffer(new Map())).toBe(false);
  expect(isArrayBuffer(new ArrayBuffer(1))).toBe(true);
});
