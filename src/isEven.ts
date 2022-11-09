import isNumber from "./isNumber";

/**
 * Check if value is a even.
 * @category Type
 * @param value - The value to check
 * @returns Returns true if value is a even, else false.
 */
function isEven(value: any): boolean {
  if (!isNumber(value)) {
    throw new Error("The value must be number");
  }
  return value % 2 === 0;
}

export default isEven;
