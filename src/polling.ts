import sleep from "./sleep";

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
