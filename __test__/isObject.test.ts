import { test, expect } from "vitest";
import { isObject } from "../src";

test("isObject", () => {
  expect(isObject(0)).toBe(false);
  expect(isObject(1)).toBe(false);
  expect(isObject(-1)).toBe(false);
  expect(isObject(Infinity)).toBe(false);
  expect(isObject(-Infinity)).toBe(false);
  expect(isObject(NaN)).toBe(false);
  expect(isObject("1")).toBe(false);
  expect(isObject(undefined)).toBe(false);
  expect(isObject(null)).toBe(false);
  expect(isObject([])).toBe(false);
  expect(isObject({})).toBe(true);
  expect(isObject(true)).toBe(false);
  expect(isObject(false)).toBe(false);
  expect(isObject(() => {})).toBe(false);
  expect(isObject(new Set())).toBe(false);
  expect(isObject(new Map())).toBe(false);
});
