import { test, expect } from "vitest";
import { isFalsy } from "../src";
import { getTestValues } from "./util";

const values = getTestValues().map((value, index) => ({
  index,
  expected: isFalsy(value),
}));

test.each(values)("isFalsy($index) -> $expected", ({ index, expected }) => {
  expect([0, 5, 7, 8, 12].includes(index)).toBe(expected);
});
