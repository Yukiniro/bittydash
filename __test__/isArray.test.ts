import { test, expect } from "vitest";
import { isArray } from "../src";

test("isArray", () => {
  expect(isArray(0)).toBe(false);
  expect(isArray(1)).toBe(false);
  expect(isArray(-1)).toBe(false);
  expect(isArray(Infinity)).toBe(false);
  expect(isArray(-Infinity)).toBe(false);
  expect(isArray(NaN)).toBe(false);
  expect(isArray("1")).toBe(false);
  expect(isArray(undefined)).toBe(false);
  expect(isArray(null)).toBe(false);
  expect(isArray([])).toBe(true);
  expect(isArray({})).toBe(false);
  expect(isArray(true)).toBe(false);
  expect(isArray(false)).toBe(false);
  expect(isArray(() => {})).toBe(false);
  expect(isArray(new Set())).toBe(false);
  expect(isArray(new Map())).toBe(false);
});
