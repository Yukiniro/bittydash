import { expect, test } from "vitest";
import { isEven } from "../src";

test("Wrong arguments", () => {
  expect(() => isEven(null as unknown as number)).toThrowError(
    "The value must be number"
  );
});

test("Test value", () => {
  expect(isEven(-1)).toBe(false);
  expect(isEven(0)).toBe(true);
  expect(isEven(1)).toBe(false);
  expect(isEven(2)).toBe(true);
});
