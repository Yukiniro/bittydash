import { expect, test } from "vitest";
import { fitSize } from "../src";

test("fitSize", () => {
  expect(fitSize({ width: 10, height: 10 }, { width: 50, height: 50 })).toEqual(
    { width: 50, height: 50 }
  );

  expect(fitSize({ width: 10, height: 10 }, { width: 100, height: 50 })).toEqual(
    { width: 50, height: 50 }
  );

  expect(fitSize({ width: 10, height: 10 }, { width: 50, height: 100 })).toEqual(
    { width: 50, height: 50 }
  );

  expect(fitSize({ width: 10, height: 20 }, { width: 100, height: 50 })).toEqual(
    { width: 25, height: 50 }
  );
});
