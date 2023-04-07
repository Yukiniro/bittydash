import { describe, expect, test } from "vitest";
import { valueInRange } from "../src";

describe("Arguments error", () => {
  test("Arguments error", () => {
    expect(() =>
      valueInRange(
        "1" as unknown as number,
        "1" as unknown as number,
        "1" as unknown as number
      )
    ).toThrowError("valueInRange: All parameters must be a number.");
  });

  test("Arguments error", () => {
    expect(() => valueInRange(10, 100, 50)).toThrowError(
      "The min value must less than the max value."
    );
  });
});

describe("Test", () => {
  test("Mid value", () => {
    expect(valueInRange(10, 5, 20)).toBe(10);
  });

  test("Min value", () => {
    expect(valueInRange(10, 15, 20)).toBe(15);
  });

  test("Max value", () => {
    expect(valueInRange(10, 5, 8)).toBe(8);
  });
});
