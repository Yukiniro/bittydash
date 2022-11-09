/**
 * @description Check if value is classified as a set.
 * @category Type
 * @param value - The value to check.
 * @returns Returns true if value is a set, else false.
 */
function isSet(value: any): boolean {
  return Object.prototype.toString.call(value) === "[object Set]";
}

export default isSet;
