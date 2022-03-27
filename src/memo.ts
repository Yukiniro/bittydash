import isFunction from "./isFunction";

/**
 * @description Cache the specified function, and return the result directly if the parameters are consistent.
 * @param handler The function to cache.
 * @returns Return a function to transfer.
 */
function memo(handler: (...args: any[]) => any) {
  if (!isFunction(handler)) {
    throw new Error("Handler must be function");
  }
  const argsCache = [];
  const resultCache = [];
  return (...args: any[]) => {
    const cacheIndex = argsCache.findIndex((item: any[]) => {
      let index = 0;
      while (index < args.length) {
        if (item[index] !== args[index]) {
          return false;
        }
        index++;
      }
      return true;
    });
    if (cacheIndex === -1) {
      const result = handler(...args);
      argsCache.push([...args]);
      resultCache.push(result);
      return result;
    } else {
      return resultCache[cacheIndex];
    }
  };
}

export default memo;
