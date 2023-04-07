/**
 * @description Check if value is null.
 * @category Type
 * @param value - The value to check.
 * @returns Returns true if value is null, else false.
 */
function isNull(value: unknown): boolean {
  return !value && typeof value === "object";
}

export default isNull;
