import { expect, test } from "vitest";
import { uniq } from "../src";

test("uniq error", () => {
  expect(() => {
    uniq(111 as unknown as any[]);
  }).toThrow("value must be array");
});

test("remove", () => {
  expect(uniq([1, 2, 2, 1, 3])).toEqual([1, 2, 3]);
  expect(
    uniq([
      "Yuki",
      undefined,
      undefined,
      "Nick",
      "Yuki",
      true,
      true,
      0,
      1,
      0,
      {},
      {},
    ])
  ).toEqual(["Yuki", undefined, "Nick", true, 0, 1, {}, {}]);
});
