/**
 * @description Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.
 * @param func - Function to call
 * @param wait - Time to delay
 * @returns
 */
function debounce(func: (arg0: any) => any, wait = 0): (arg0: any) => any {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
      timer = null;
    }, wait);
  };
}

export default debounce;
