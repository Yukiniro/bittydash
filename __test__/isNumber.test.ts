import { test, expect } from "vitest";
import { isNumber } from "../src";
import { getTestValues } from "./util";

const values = getTestValues().map((value, index) => ({
  index,
  expected: isNumber(value),
}));

test.each(values)("isNumber($index) -> $expected", ({ index, expected }) => {
  expect([0, 1, 2, 3, 4].includes(index)).toBe(expected);
});
