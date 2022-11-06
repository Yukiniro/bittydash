import { test, expect } from "vitest";
import { isNaN } from "../src";

test("isNaN", () => {
  expect(isNaN(0)).toBe(false);
  expect(isNaN(1)).toBe(false);
  expect(isNaN(-1)).toBe(false);
  expect(isNaN(Infinity)).toBe(false);
  expect(isNaN(-Infinity)).toBe(false);
  expect(isNaN(NaN)).toBe(true);
  expect(isNaN("1")).toBe(false);
  expect(isNaN(undefined)).toBe(false);
  expect(isNaN(null)).toBe(false);
  expect(isNaN([])).toBe(false);
  expect(isNaN({})).toBe(false);
  expect(isNaN(true)).toBe(false);
  expect(isNaN(false)).toBe(false);
  expect(isNaN(() => {})).toBe(false);
  expect(isNaN(new Set())).toBe(false);
  expect(isNaN(new Map())).toBe(false);
  expect(isNaN(new ArrayBuffer(1))).toBe(false);
});
