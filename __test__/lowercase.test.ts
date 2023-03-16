import { expect, test } from "vitest";
import { lowercase } from "../src";

test("isString", () => {
  expect(lowercase("hello")).toBe("hello");
  expect(lowercase("heLlo")).toBe("hello");
  expect(lowercase("HELLO")).toBe("hello");
});
