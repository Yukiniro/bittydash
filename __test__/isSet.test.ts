import { test, expect } from "vitest";
import { isSet } from "../src";

test("isSet", () => {
  expect(isSet(0)).toBe(false);
  expect(isSet(1)).toBe(false);
  expect(isSet(-1)).toBe(false);
  expect(isSet(Infinity)).toBe(false);
  expect(isSet(-Infinity)).toBe(false);
  expect(isSet(NaN)).toBe(false);
  expect(isSet("1")).toBe(false);
  expect(isSet(undefined)).toBe(false);
  expect(isSet(null)).toBe(false);
  expect(isSet([])).toBe(false);
  expect(isSet({})).toBe(false);
  expect(isSet(true)).toBe(false);
  expect(isSet(false)).toBe(false);
  expect(isSet(() => {})).toBe(false);
  expect(isSet(new Set())).toBe(true);
  expect(isSet(new Map())).toBe(false);
});
