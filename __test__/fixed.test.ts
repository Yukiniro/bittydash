import { expect, test } from "vitest";
import { fixed } from "../src";

test("fixed wrong", () => {
  expect(() => fixed("123" as unknown as number)).toThrowError("Value must be number");
});

test("fixed", () => {
  expect(fixed(10.00332423, 4)).toBe(10.0033);
  expect(fixed(10.00332423, 0)).toBe(10);
  expect(fixed(10.00332423, 1)).toBe(10.0);
  expect(fixed(-10.00332423, 5)).toBe(-10.00332);
});
