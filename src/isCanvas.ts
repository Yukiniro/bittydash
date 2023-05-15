/**
 * @description Check if value is classified as a Canvas.
 * @category Type
 * @param value - The value to check.
 * @returns Returns true if value is a Canvas, else false.
 */
function isCanvas(value: unknown): boolean {
  return Object.prototype.toString.call(value) === "[object HTMLCanvasElement]";
}

export default isCanvas;
