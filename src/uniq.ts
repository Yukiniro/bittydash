import isArray from "./isArray";

/**
 * Removes duplicate entries from the array and returns a new array
 * @param value - The array to inspect
 * @returns An array with no duplicates
 */
function uniq(value: Array<any>): Array<any> {
  if (!isArray(value)) {
    throw new Error("The value must be array");
  }
  return Array.from(new Set(value));
}

export default uniq;
