import isNumber from "./isNumber";

/**
 * Check if value is a even.
 * @category Type
 * @param value - The value to check
 * @returns Returns true if value is a even, else false.
 */
function isEven(value: number): boolean {
  if (!isNumber(value)) {
    throw new Error(
      `isEven: parameter \`value\` expected to be a number, but got "${typeof value}"`
    );
  }
  return value % 2 === 0;
}

export default isEven;
