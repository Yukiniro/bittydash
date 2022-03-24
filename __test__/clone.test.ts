import { expect, test } from "vitest";
import { clone } from "../src";
import { getComposeValue } from "./util";

test("clone", () => {
  expect(clone("Hello World")).toBe("Hello World");
  expect(clone(123)).toBe(123);
});

test("deep clone", () => {
  expect(clone(getComposeValue(), true)).toEqual(getComposeValue());
});
