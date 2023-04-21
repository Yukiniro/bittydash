import { test, expect } from "vitest";
import { isArray } from "../src";
import { getTestValues } from "./util";

const values = getTestValues().map((value, index) => ({
  index,
  expected: isArray(value),
}));

test.each(values)("isArray($index) -> $expected", ({ index, expected }) => {
  expect(index === 9).toBe(expected);
});
