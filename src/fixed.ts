import isNumber from "./isNumber";

/**
 * @description Formats a number using fixed-point notation.
 * @param value The number to format.
 * @param digits The number of digits to appear after the decimal point.
 * @returns The number after format.
 */
function fixed(value: number, digits = 0): number {
  if (!isNumber(value)) {
    throw new Error("Value must be number");
  }
  return Number(value.toFixed(digits));
}

export default fixed;
