/**
 * @description Check if value is falsy value.(0, null, undefined, "", NaN)
 * @param value The value to check.
 * @returns Returns true if value is falsy, else false.
 */
function isFalsy(value: any): boolean {
  return !value;
}

export default isFalsy;
