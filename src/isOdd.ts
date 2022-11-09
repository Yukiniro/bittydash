import isEven from "./isEven";

/**
 * Check if value is a odd.
 * @category Type
 * @param value - The value to check
 * @returns Returns true if value is a odd, else false.
 */
function isOdd(value: number) {
  return !isEven(value);
}

export default isOdd;
