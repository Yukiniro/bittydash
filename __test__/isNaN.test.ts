import { test, expect } from "vitest";
import { isNaN } from "../src";
import { getTestValues } from "./util";

const values = getTestValues().map((value, index) => ({
  index,
  expected: isNaN(value),
}));

test.each(values)("isNaN($index) -> $expected", ({ index, expected }) => {
  expect([5].includes(index)).toBe(expected);
});
