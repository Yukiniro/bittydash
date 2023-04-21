import { test, expect } from "vitest";
import { isUndefined } from "../src";
import { getTestValues } from "./util";

const values = getTestValues().map((value, index) => ({
  index,
  expected: isUndefined(value),
}));

test.each(values)("isFalsy($index) -> $expected", ({ index, expected }) => {
  expect([7].includes(index)).toBe(expected);
});
