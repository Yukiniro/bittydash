/**
 * @description Check if value is classified as a number.
 * @category Type
 * @param value - The value to check.
 * @returns Returns true if value is a number, else false.
 */
function isNumber(value: any): boolean {
  // NaN !== NaN
  return typeof value === "number" && value === value;
}

export default isNumber;
