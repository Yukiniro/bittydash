import { expect, test } from "vitest";
import { uppercase } from "../src";

test("isString", () => {
  expect(uppercase("hello")).toBe("HELLO");
  expect(uppercase("heLlo")).toBe("HELLO");
  expect(uppercase("HELLO")).toBe("HELLO");
});
