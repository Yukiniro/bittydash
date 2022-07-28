import isArray from "./isArray";
import isFunction from "./isFunction";

/**
 * @description Removes a specified value or a matching value from an array.
 * @param array The array to modify.
 * @param checker The item or the function invoked per iteration.
 */
function remove(array: any[], checker: any) {
  if (!isArray(array)) {
    throw new Error("The value must be array");
  }
  const newArray = array.filter((item: any) => {
    return isFunction(checker) ? !checker(item) : checker !== item;
  });
  array.length = 0;
  array.push(...newArray);
}

export default remove;
