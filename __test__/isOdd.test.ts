import { expect, test } from "vitest";
import { isOdd } from "../src";

test("Wrong arguments", () => {
  expect(() => isOdd(null as unknown as number)).toThrowError(
    "The value must be number"
  );
});

test("Test value", () => {
  expect(isOdd(-1)).toBe(true);
  expect(isOdd(0)).toBe(false);
  expect(isOdd(1)).toBe(true);
  expect(isOdd(2)).toBe(false);
});
