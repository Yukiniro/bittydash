/**
 * @description Check if value is classified as a ArrayBuffer.
 * @category Type
 * @param value - The value to check.
 * @returns Returns true if value is a ArrayBuffer, else false.
 */
function isArrayBuffer(value: unknown) {
  return Object.prototype.toString.call(value) === "[object ArrayBuffer]";
}

export default isArrayBuffer;
