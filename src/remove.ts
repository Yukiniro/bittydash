import isArray from "./isArray";
import isFunction from "./isFunction";

type FnChecker = (...args: unknown[]) => boolean;

/**
 * @description Removes a specified value or a matching value from an array.
 * @category Function
 * @param array - The array to modify.
 * @param checker - The item or the function invoked per iteration.
 */
function remove(array: unknown[], checker: FnChecker | unknown) {
  if (!isArray(array)) {
    throw new Error("The value must be array");
  }
  const newArray = array.filter((item: unknown) => {
    return isFunction(checker)
      ? !(checker as FnChecker)(item)
      : checker !== item;
  });
  array.length = 0;
  array.push(...newArray);
}

export default remove;
