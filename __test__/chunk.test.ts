import { expect, test } from "vitest";
import { chunk } from "../src";

test("chunk error", () => {
  expect(() => {
    chunk(111);
  }).toThrow("value must be string or array");
});

test("chunk", () => {
  expect(chunk("abc")).toEqual(["a", "b", "c"]);
  expect(chunk("ab c", 2)).toEqual(["ab", " c"]);
  expect(chunk(["a", "b", "c"], 2)).toEqual([["a", "b"], ["c"]]);
  expect(chunk(["a", "b", "cd", "e"], 2)).toEqual([
    ["a", "b"],
    ["cd", "e"],
  ]);
});
