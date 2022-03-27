import { expect, test } from "vitest";
import { remove } from "../src";

test("remove error", () => {
  expect(() => {
    remove(111 as unknown as any[], "");
  }).toThrow("value must be array");
});

test("remove", () => {
  const list = [1, 2, 3, 4];
  remove(list, 2);
  expect(list).toEqual([1, 3, 4]);
  remove(list, (item: any) => item === 3);
  expect(list).toEqual([1, 4]);
});
