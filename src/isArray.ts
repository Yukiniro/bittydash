/**
 * @description Check if value is classified as an array.
 * @category Type
 * @param value - The value to check
 * @returns Returns true if value is an array, else false.
 */
function isArray(value: any): boolean {
  return Array.isArray(value);
}

export default isArray;
