import { expect, test } from "vitest";
import { isString } from "../src";
import { getTestValues } from "./util";

const values = getTestValues().map((value, index) => ({
  index,
  expected: isString(value),
}));

test.each(values)("isFalsy($index) -> $expected", ({ index, expected }) => {
  expect([6].includes(index)).toBe(expected);
});
