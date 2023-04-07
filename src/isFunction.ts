/**
 * @description Check if value is classified as a function.
 * @category Type
 * @param value - The value to check.
 * @returns Returns true if value is a function, else false.
 */
function isFunction(value: unknown): boolean {
  return Object.prototype.toString.call(value) === "[object Function]";
}

export default isFunction;
