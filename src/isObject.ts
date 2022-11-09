/**
 * @description Check if value is classified as an object.
 * @category Type
 * @param value - The value to check.
 * @returns Returns true if value is an object, else false.
 */
function isObject(value: any): boolean {
  return Object.prototype.toString.call(value) === "[object Object]";
}

export default isObject;
