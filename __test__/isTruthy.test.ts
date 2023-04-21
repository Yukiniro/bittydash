import { test, expect } from "vitest";
import { isTruthy } from "../src";
import { getTestValues } from "./util";

const values = getTestValues().map((value, index) => ({
  index,
  expected: isTruthy(value),
}));

test.each(values)("isTruthy($index) -> $expected", ({ index, expected }) => {
  expect([1, 2, 3, 4, 6, 9, 10, 11, 13, 14, 15, 16].includes(index)).toBe(
    expected
  );
});
