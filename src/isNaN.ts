/**
 * @description Check if value is NaN.
 * @category Type
 * @param value - The value to check.
 * @returns Returns true if value is NaN, else false.
 */
function isNaN(value: any): boolean {
  return typeof value === "number" && value !== value;
}

export default isNaN;
