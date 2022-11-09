import isArray from "./isArray";
import isString from "./isString";

/**
 * @description Split elements in the array into groups the length of size.
 * @value - The array or string to process.
 * @size - The length of every chunk.
 * @returns The array of chunks
 */
function chunk(value: any[] | string, size = 1): any[] {
  if (!isString(value) && !isArray(value)) {
    throw new Error("The value must be string or array");
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
