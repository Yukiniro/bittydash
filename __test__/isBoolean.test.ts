import { test, expect } from "vitest";
import { isBoolean } from "../src";
import { getTestValues } from "./util";

const values = getTestValues().map((value, index) => ({
  index,
  expected: isBoolean(value),
}));

test.each(values)("isBoolean($index) -> $expected", ({ index, expected }) => {
  expect(index === 11 || index === 12).toBe(expected);
});
