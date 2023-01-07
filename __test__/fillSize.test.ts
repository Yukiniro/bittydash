import { expect, test } from "vitest";
import { fillSize } from "../src";

test("fitSize", () => {
  expect(fillSize({ width: 10, height: 10 }, { width: 50, height: 50 })).toEqual(
    { width: 50, height: 50 }
  );

  expect(fillSize({ width: 10, height: 10 }, { width: 100, height: 50 })).toEqual(
    { width: 100, height: 100 }
  );

  expect(fillSize({ width: 10, height: 10 }, { width: 50, height: 100 })).toEqual(
    { width: 100, height: 100 }
  );

  expect(fillSize({ width: 10, height: 20 }, { width: 100, height: 50 })).toEqual(
    { width: 100, height: 200 }
  );
});
