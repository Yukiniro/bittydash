/**
 * @description Check if value is classified as a blob.
 * @category Type
 * @param value - The value to check
 * @returns Returns true if value is a blob, else false.
 */
function isBlob(value: unknown): boolean {
  return Object.prototype.toString.call(value) === "[object Blob]";
}

export default isBlob;
