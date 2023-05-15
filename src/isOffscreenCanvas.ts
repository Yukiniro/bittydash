/**
 * @description Check if value is classified as a OffscreenCanvas.
 * @category Type
 * @param value - The value to check.
 * @returns Returns true if value is a OffscreenCanvas, else false.
 */
function isOffscreenCanvas(value: unknown): boolean {
  return Object.prototype.toString.call(value) === "[object OffscreenCanvas]";
}

export default isOffscreenCanvas;
