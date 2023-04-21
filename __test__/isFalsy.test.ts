import { test, expect } from "vitest";
import { isFalsy } from "../src";
import { getTestValues } from "./util";

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
  expect(isFalsy(() => {})).toBe(false);
  expect(isFalsy(new Set())).toBe(false);
  expect(isFalsy(new Map())).toBe(false);
  expect(isFalsy(new ArrayBuffer(1))).toBe(false);
});

const values = getTestValues().map((value, index) => ({
  index,
  expected: isFalsy(value),
}));

test.each(values)("isBoolean($index) -> $expected", ({ index, expected }) => {
  expect([1, 2, 3, 4, 6, 9, 10, 11, 13, 14, 15, 16].includes(index)).toBe(
    expected
  );
});
