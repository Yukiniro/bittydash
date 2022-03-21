import { test, expect } from "vitest";
import { isNumber } from "../src";

test("isNumber", () => {
  expect(isNumber(0)).toBe(true);
  expect(isNumber(1)).toBe(true);
  expect(isNumber(-1)).toBe(true);
  expect(isNumber(Infinity)).toBe(true);
  expect(isNumber(-Infinity)).toBe(true);
  expect(isNumber(NaN)).toBe(false);
  expect(isNumber('1')).toBe(false);
  expect(isNumber(undefined)).toBe(false);
  expect(isNumber(null)).toBe(false);
  expect(isNumber([])).toBe(false);
  expect(isNumber({})).toBe(false);
  expect(isNumber(true)).toBe(false);
  expect(isNumber(false)).toBe(false);
});
