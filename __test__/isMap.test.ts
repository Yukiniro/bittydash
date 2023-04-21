import { test, expect } from "vitest";
import { isMap } from "../src";
import { getTestValues } from "./util";

const values = getTestValues().map((value, index) => ({
  index,
  expected: isMap(value),
}));

test.each(values)("isMap($index) -> $expected", ({ index, expected }) => {
  expect([15].includes(index)).toBe(expected);
});
