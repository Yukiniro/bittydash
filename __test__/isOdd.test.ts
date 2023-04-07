import { expect, test } from "vitest";
import { isOdd } from "../src";

test("Wrong arguments", () => {
  expect(() => isOdd(null as unknown as number)).toThrowError(
    `isEven: parameter \`value\` expected to be a number, but got "object"`
  );
});

test("Test value", () => {
  expect(isOdd(-1)).toBe(true);
  expect(isOdd(0)).toBe(false);
  expect(isOdd(1)).toBe(true);
  expect(isOdd(2)).toBe(false);
});
