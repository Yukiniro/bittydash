import { expect, test } from "vitest";
import { isEqual } from "../src";
import { getComposeValue } from "./util";

test("isEqual", () => {
  expect(isEqual(111, 111)).toBe(true);
  expect(isEqual("111", "111")).toBe(true);
  expect(isEqual(NaN, NaN)).toBe(true);
  expect(isEqual(undefined, undefined)).toBe(true);
  expect(isEqual(null, null)).toBe(true);
  expect(isEqual(getComposeValue(), getComposeValue())).toBe(true);
});
