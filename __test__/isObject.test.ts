import { test, expect } from "vitest";
import { isObject } from "../src";
import { getTestValues } from "./util";

const values = getTestValues().map((value, index) => ({
  index,
  expected: isObject(value),
}));

test.each(values)("isObject($index) -> $expected", ({ index, expected }) => {
  expect([10].includes(index)).toBe(expected);
});
