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
  expect(() => random(1, "2")).toThrowError("Min or max must be number");
});
