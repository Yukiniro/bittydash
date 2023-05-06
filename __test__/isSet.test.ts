import { test, expect } from "vitest";
import { isSet } from "../src";
import { getTestValues } from "./util";

const values = getTestValues().map((value, index) => ({
  index,
  expected: isSet(value),
}));

test.each(values)("isSet($index) -> $expected", ({ index, expected }) => {
  expect([14].includes(index)).toBe(expected);
});
