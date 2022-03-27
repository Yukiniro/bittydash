import { expect, test } from "vitest";
import { memo } from "../src";

test("memo wrong", () => {
  expect(() => {
    memo("111" as unknown as () => any);
  }).toThrowError("Handler must be function");
});

test("memo", () => {
  function add(value1: number, value2: number) {
    return value1 + value2;
  }

  const memoAdd = memo(add);
  expect(memoAdd(1, 2)).toBe(3);
  expect(memoAdd(1, 2)).toBe(3);
  expect(memoAdd(10, 20)).toBe(30);
  expect(memoAdd(10, 20)).toBe(30);
});
