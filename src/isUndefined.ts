/**
 * @description Check if value is undefined.
 * @param value The value to check.
 * @returns Returns true if value is undefined, else false.
 */
function isUndefined(value: any): boolean {
  return value === void 0;
}

export default isUndefined;
