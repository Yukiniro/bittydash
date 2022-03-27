import isNumber from "./isNumber";

/**
 * @description Delay a specified time.
 * @param time The time to delay.
 */
async function sleep(time = 0) {
  await new Promise((resolve, reject) => {
    if (!isNumber(time)) {
      reject(new Error("Time must be a number"));
    }
    setTimeout(resolve, time);
  });
}

export default sleep;
