import { test, expect } from "vitest";
import { isBoolean } from "../src";

test("isBoolean", () => {
  expect(isBoolean(0)).toBe(false);
  expect(isBoolean(1)).toBe(false);
  expect(isBoolean(-1)).toBe(false);
  expect(isBoolean(Infinity)).toBe(false);
  expect(isBoolean(-Infinity)).toBe(false);
  expect(isBoolean(NaN)).toBe(false);
  expect(isBoolean("1")).toBe(false);
  expect(isBoolean(undefined)).toBe(false);
  expect(isBoolean(null)).toBe(false);
  expect(isBoolean([])).toBe(false);
  expect(isBoolean({})).toBe(false);
  expect(isBoolean(true)).toBe(true);
  expect(isBoolean(false)).toBe(true);
});
