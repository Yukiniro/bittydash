import { expect, test } from "vitest";
import { randomColor } from "../src/index";

test("hex", () => {
  expect(randomColor("hex")).toMatch(/^#([0123456789ABCDEF]){6}/);
  expect(randomColor("hex", 0.5)).toMatch(/^#([0123456789ABCDEF]){8}/);
});

test("rgb", () => {
  expect(randomColor("rgb")).toMatch(
    /rgb\([0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5],\s[0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5],\s[0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]\)/
  );

  expect(randomColor("rgb", 0.5)).toMatch(
    /rgba\([0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5],\s[0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5],\s[0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5],\s0\.[0-9]\)/
  );
});

test("hsl", () => {
  expect(randomColor("hsl")).toMatch(
    /hsl\([0-9]|[1-2][0-9][0-9]|3[0-5][0-9],\s[0-9]|1[0-9]|100\\%,\s[0-9]|1[0-9]|100\\%\)/
  );
  expect(randomColor("hsl", 0.5)).toMatch(
    /hsla\([0-9]|[1-2][0-9][0-9]|3[0-5][0-9],\s[0-9]|1[0-9]|100\\%,\s[0-9]|1[0-9]|100\\%,\s0\.[0-9]\)/
  );
});
