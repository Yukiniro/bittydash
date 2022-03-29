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
