import isArray from "./isArray";
import isString from "./isString";

/**
 * @desc Split elements in the array into groups the length of size.
 * @param value
 * @param size
 * @returns
 */
function chunk(value: any, size = 1): Array<any> {
  if (!isString(value) && !isArray(value)) {
    throw new Error("value must be string or array");
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
