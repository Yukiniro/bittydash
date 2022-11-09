/**
 * Creates a throttled function that only invokes func at most once per every wait milliseconds.
 * @param func - Function to call
 * @param wait - Time to delay
 * @returns
 */
function throttle(func: (arg0: any) => any, wait = 0): (arg0: any) => any {
  let timer = null;
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
      }, wait);
    }
  };
}

export default throttle;
