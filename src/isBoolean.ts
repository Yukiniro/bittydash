/**
 * @description Check if value is classified as a boolean.
 * @category Type
 * @param value - The value to check.
 * @returns Returns true if value is a boolean, else false.
 */
function isBoolean(value: any): boolean {
  return typeof value === "boolean";
}

export default isBoolean;
