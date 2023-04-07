import isNumber from "./isNumber";

/**
 * @description Delay a specified time.
 * @category Function
 * @param time - The time to delay.
 */
async function sleep(time = 0) {
  await new Promise((resolve, reject) => {
    if (!isNumber(time)) {
      reject(
        new Error(
          `sleep: parameter \`time\` expected to be a number, but got "${typeof time}"`
        )
      );
    }
    setTimeout(resolve, time);
  });
}

export default sleep;
