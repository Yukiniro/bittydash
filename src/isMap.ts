/**
 * @description Check if value is classified as a map.
 * @category Type
 * @param value - The value to check.
 * @returns Returns true if value is a map, else false.
 */
function isMap(value: any): boolean {
  return Object.prototype.toString.call(value) === "[object Map]";
}

export default isMap;
