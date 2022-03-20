import { test, expect } from "vitest";
import { sayHello } from "../src";

test("hello world", () => {
  expect(sayHello()).toBe("Hello World");
});
