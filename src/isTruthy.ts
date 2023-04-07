/**
 * @description Check if value is truthy value.
 * @category Type
 * @param value - The value to check.
 * @returns Returns true if value is truthy, else false.
 */
function isTruthy(value: unknown): boolean {
  return !!value;
}

export default isTruthy;
