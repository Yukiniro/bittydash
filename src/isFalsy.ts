/**
 * @description Check if value is falsy value.(0, null, undefined, "", NaN)
 * @category Type
 * @param value - The value to check.
 * @returns Returns true if value is falsy, else false.
 */
function isFalsy(value: unknown): boolean {
  return !value;
}

export default isFalsy;
