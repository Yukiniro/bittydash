import { test, expect } from "vitest";
import { isFunction } from "../src";

test("isFunction", () => {
  expect(isFunction(0)).toBe(false);
  expect(isFunction(1)).toBe(false);
  expect(isFunction(-1)).toBe(false);
  expect(isFunction(Infinity)).toBe(false);
  expect(isFunction(-Infinity)).toBe(false);
  expect(isFunction(NaN)).toBe(false);
  expect(isFunction("1")).toBe(false);
  expect(isFunction(undefined)).toBe(false);
  expect(isFunction(null)).toBe(false);
  expect(isFunction([])).toBe(false);
  expect(isFunction({})).toBe(false);
  expect(isFunction(true)).toBe(false);
  expect(isFunction(false)).toBe(false);
  expect(isFunction(() => {})).toBe(true);
});
