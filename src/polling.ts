import sleep from "./sleep";

/**
 * @description Poll the specified function and exit the poll if it meets the requirements.
 * @category Function
 * @param checker - The function to poll. Exit if return true.
 * @param interval - The interval of polling.
 * @param timeout - The timeout of polling.
 */
async function polling(
  checker: () => boolean,
  interval = 50,
  timeout = 5000
): Promise<void> {
  const startTime = performance.now();
  while (!checker() && performance.now() - startTime < timeout) {
    await sleep(interval);
  }
}

export default polling;
