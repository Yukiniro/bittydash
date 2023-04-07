import isArray from "./isArray";

/**
 * Removes duplicate entries from the array and returns a new array
 * @param value - The array to inspect
 * @returns An array with no duplicates
 */
function uniq(value: Array<unknown>): Array<unknown> {
  if (!isArray(value)) {
    throw new Error(
      `uniq: parameter \`value\` expected to be a array, but got "${typeof value}"`
    );
  }
  return Array.from(new Set(value));
}

export default uniq;
