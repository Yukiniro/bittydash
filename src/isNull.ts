/**
 * @description Check if value is null.
 * @param value The value to check.
 * @returns Returns true if value is null, else false.
 */
function isNull(value: any): boolean {
  return !value && typeof value === "object";
}

export default isNull;
