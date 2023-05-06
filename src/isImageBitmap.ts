/**
 * @description Check if value is classified as a ImageBitMap.
 * @category Type
 * @param value - The value to check.
 * @returns Returns true if value is a ImageBitMap, else false.
 */
function isImageBitmap(value: unknown): boolean {
  return Object.prototype.toString.call(value) === "[object ImageBitmap]";
}

export default isImageBitmap;
