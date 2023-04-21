import { test, expect } from "vitest";
import { isTruthy } from "../src";
import { getTestValues } from "./util";

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
  expect(isTruthy(new Set())).toBe(true);
  expect(isTruthy(new Map())).toBe(true);
  expect(isTruthy(new ArrayBuffer(1))).toBe(true);
});

const values = getTestValues().map((value, index) => ({
  index,
  expected: isTruthy(value),
}));

test.each(values)("isBoolean($index) -> $expected", ({ index, expected }) => {
  expect([1, 2, 3, 4, 6, 9, 10, 11, 13, 14, 15, 16].includes(index)).toBe(
    expected
  );
});

