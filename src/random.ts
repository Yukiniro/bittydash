import isNumber from "./isNumber";

/**
 * @description Returns a random value between min and max.
 * @param min The min value.
 * @param max The max value.
 * @returns The random value.
 */
function random(min: any, max: any): number {
  if (!isNumber(min) || !isNumber(max)) {
    throw new Error("Min or max must be number");
  }
  const intMin = Math.ceil(min);
  const intMax = Math.floor(max);
  return Math.floor(Math.random() * (intMax - intMin + 1) + intMin);
}

export default random;
