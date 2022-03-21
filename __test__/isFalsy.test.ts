import { test, expect } from "vitest";
import { isFalsy } from "../src";

test("isFalsy", () => {
  expect(isFalsy(0)).toBe(true);
  expect(isFalsy(1)).toBe(false);
  expect(isFalsy(-1)).toBe(false);
  expect(isFalsy(Infinity)).toBe(false);
  expect(isFalsy(-Infinity)).toBe(false);
  expect(isFalsy(NaN)).toBe(true);
  expect(isFalsy("1")).toBe(false);
  expect(isFalsy(undefined)).toBe(true);
  expect(isFalsy(null)).toBe(true);
  expect(isFalsy([])).toBe(false);
  expect(isFalsy({})).toBe(false);
  expect(isFalsy(true)).toBe(false);
  expect(isFalsy(false)).toBe(true);
});
