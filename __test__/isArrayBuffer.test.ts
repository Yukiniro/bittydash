import { test, expect } from "vitest";
import { isArrayBuffer } from "../src";
import { getTestValues } from "./util";

const values = getTestValues().map((value, index) => ({
  index,
  expected: isArrayBuffer(value),
}));

test.each(values)(
  "isArrayBuffer($index) -> $expected",
  ({ index, expected }) => {
    expect(index === 16).toBe(expected);
  }
);
