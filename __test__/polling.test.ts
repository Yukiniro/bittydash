import { test } from "vitest";
import { polling } from "../src";

test("polling checker", (done) => {
  let flag = false;
  function checker() {
    return flag;
  }
  setTimeout(() => {
    flag = true;
  }, 500);

  polling(checker).then(done);
}, 1000);

test("polling timeout", (done) => {
  let flag = false;
  function checker() {
    return flag;
  }
  setTimeout(() => {
    flag = true;
  }, 5000);

  polling(checker, 10, 1000).then(done);
}, 1050);
