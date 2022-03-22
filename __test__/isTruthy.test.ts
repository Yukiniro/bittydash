import { test, expect } from "vitest";
import { isTruthy } from "../src";

test("isTruthy", () => {
  expect(isTruthy(0)).toBe(false);
  expect(isTruthy(1)).toBe(true);
  expect(isTruthy(-1)).toBe(true);
  expect(isTruthy(Infinity)).toBe(true);
  expect(isTruthy(-Infinity)).toBe(true);
  expect(isTruthy(NaN)).toBe(false);
  expect(isTruthy("1")).toBe(true);
  expect(isTruthy(undefined)).toBe(false);
  expect(isTruthy(null)).toBe(false);
  expect(isTruthy([])).toBe(true);
  expect(isTruthy({})).toBe(true);
  expect(isTruthy(true)).toBe(true);
  expect(isTruthy(false)).toBe(false);
  expect(isTruthy(() => {})).toBe(true);
});
