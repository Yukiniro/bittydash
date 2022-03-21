import { expect } from "vitest";
import { test } from "vitest";
import { isString } from "../src";

test("isString", () => {
  expect(isString(0)).toBe(false);
  expect(isString(1)).toBe(false);
  expect(isString(-1)).toBe(false);
  expect(isString(Infinity)).toBe(false);
  expect(isString(-Infinity)).toBe(false);
  expect(isString(NaN)).toBe(false);
  expect(isString("1")).toBe(true);
  expect(isString("")).toBe(true);
  expect(isString(undefined)).toBe(false);
  expect(isString(null)).toBe(false);
  expect(isString([])).toBe(false);
  expect(isString({})).toBe(false);
  expect(isString(true)).toBe(false);
  expect(isString(false)).toBe(false);
});
