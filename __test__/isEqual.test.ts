import { expect, test } from "vitest";
import { isEqual } from "../src";

test("isEqual", () => {
  expect(isEqual(111, 111)).toBe(true);
  expect(isEqual("111", "111")).toBe(true);
  expect(isEqual(NaN, NaN)).toBe(true);
  expect(isEqual(undefined, undefined)).toBe(true);
  expect(isEqual(null, null)).toBe(true);

  const set1 = new Set();
  const set2 = new Set();
  set1.add(1);
  set1.add([1, 2]);
  set2.add(1);
  set2.add([1, 2]);
  const map1 = new Map();
  const map2 = new Map();
  map1.set("name", "Tom");
  map1.set({ age: 18 }, "Luffy");
  map2.set("name", "Tom");
  map2.set({ age: 18 }, "Luffy");
  expect(
    isEqual(
      [0, 1, { name: "Yuki" }, set1, map1],
      [0, 1, { name: "Yuki" }, set2, map2]
    )
  ).toBe(true);
});
