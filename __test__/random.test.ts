import { expect, test } from "vitest";
import { random } from "../src";

function testValue(min: number, max: number) {
  const value = random(min, max);
  expect(value).toBeGreaterThanOrEqual(min);
  expect(value).toBeLessThanOrEqual(max);
}

test("random", () => {
  testValue(10, 100);
  testValue(-10, 10);
  testValue(-100, -10);
});

test("random wrong", () => {
  expect(() => random(1, "2" as unknown as number)).toThrowError(
    'random: parameter `min` and `max` expected to be a number, but got "number" "string"'
  );
  expect(() => random(2, 1)).toThrowError(
    "The min value must less than the max value"
  );
});
