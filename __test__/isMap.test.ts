import { test, expect } from "vitest";
import { isMap } from "../src";

test("isMap", () => {
  expect(isMap(0)).toBe(false);
  expect(isMap(1)).toBe(false);
  expect(isMap(-1)).toBe(false);
  expect(isMap(Infinity)).toBe(false);
  expect(isMap(-Infinity)).toBe(false);
  expect(isMap(NaN)).toBe(false);
  expect(isMap("1")).toBe(false);
  expect(isMap(undefined)).toBe(false);
  expect(isMap(null)).toBe(false);
  expect(isMap([])).toBe(false);
  expect(isMap({})).toBe(false);
  expect(isMap(true)).toBe(false);
  expect(isMap(false)).toBe(false);
  expect(isMap(() => {})).toBe(false);
  expect(isMap(new Set())).toBe(false);
  expect(isMap(new Map())).toBe(true);
});
