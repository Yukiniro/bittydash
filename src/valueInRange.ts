import isNumber from "./isNumber";

/**
 * @description Return the value between min and max.
 * @param value The target value
 * @param min The min value
 * @param max The max value
 * @returns The value in range
 */
function valueInRange(value: number, min: number, max: number) {
  if (!isNumber(value) || !isNumber(min) || !isNumber(max)) {
    throw new Error("All arguments must be number.");
  }
  if (min > max) {
    throw new Error("The min value must less than the max value.");
  }
  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  } else {
    return value;
  }
}

export default valueInRange;
