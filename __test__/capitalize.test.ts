import { expect, test } from "vitest";
import { capitalize } from "../src";

test("isString", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("heLlo")).toBe("HeLlo");
  expect(capitalize("HELLO")).toBe("HELLO");
});
