import { test, expect } from "vitest";
import { isUndefined } from "../src";

test("isUndefined", () => {
  expect(isUndefined(0)).toBe(false);
  expect(isUndefined(1)).toBe(false);
  expect(isUndefined(-1)).toBe(false);
  expect(isUndefined(Infinity)).toBe(false);
  expect(isUndefined(-Infinity)).toBe(false);
  expect(isUndefined(NaN)).toBe(false);
  expect(isUndefined("1")).toBe(false);
  expect(isUndefined(undefined)).toBe(true);
  expect(isUndefined(null)).toBe(false);
  expect(isUndefined([])).toBe(false);
  expect(isUndefined({})).toBe(false);
});
