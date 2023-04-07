import isNumber from "./isNumber";

/**
 * @description Returns a random value between min and max.
 * @param min - The min value.
 * @param max - The max value.
 * @returns The random value.
 */
function random(min: number, max: number): number {
  if (!isNumber(min) || !isNumber(max)) {
    throw new Error(
      `random: parameter \`min\` and \`max\` expected to be a number, but got "${typeof min}" "${typeof max}"`
    );
  }
  if (min >= max) {
    throw new Error("The min value must less than the max value");
  }
  const intMin = Math.ceil(min);
  const intMax = Math.floor(max);
  return Math.floor(Math.random() * (intMax - intMin + 1) + intMin);
}

export default random;
