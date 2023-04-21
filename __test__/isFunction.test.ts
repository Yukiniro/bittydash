import { test, expect } from "vitest";
import { isFunction } from "../src";
import { getTestValues } from "./util";

const values = getTestValues().map((value, index) => ({
  index,
  expected: isFunction(value),
}));

test.each(values)("isFunction($index) -> $expected", ({ index, expected }) => {
  expect([13].includes(index)).toBe(expected);
});
