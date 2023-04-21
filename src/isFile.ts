/**
 * @description Check if value is classified as a file.
 * @category Type
 * @param value - The value to check
 * @returns Returns true if value is a file, else false.
 */
function isFile(value: unknown): boolean {
  return Object.prototype.toString.call(value) === "[object File]";
}

export default isFile;
