/**
 * @description Check if value is classified as a string.
 * @param value The value to check.
 * @returns Returns true if value is a string, else false.
 */
function isString(value: any): boolean {
  return typeof value === "string";
}

export default isString;
