import isArray from "./isArray";
import isNumber from "./isNumber";
import isString from "./isString";

/**
 * @description Split elements in the array into groups the length of size.
 * @value - The array or string to process.
 * @size - The length of every chunk.
 * @returns The array of chunks
 */
function chunk<T>(value: T[] | string, size = 1): T[][] {
  if (!isString(value) && !isArray(value)) {
    throw new Error(
      `chunk: parameter \`value\` expected to be a string or array, but got "${typeof value}"`
    );
  }
  if (!isNumber(size)) {
    throw new Error(
      `chunk: parameter \`size\` expected to be a number, but got "${typeof value}"`
    );
  }

  const count = Math.ceil(value.length / size);
  const chunks = [];
  let index = 0;
  while (index < count) {
    const start = index * size;
    const end = (index + 1) * size;
    chunks.push(value.slice(start, end));
    index++;
  }
  return chunks;
}

export default chunk;
