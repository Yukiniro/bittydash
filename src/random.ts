import isNumber from "./isNumber";

function random(min: any, max: any): number {
  if (!isNumber(min) || !isNumber(max)) {
    throw new Error("Min or max must be number");
  }
  const intMin = Math.ceil(min);
  const intMax = Math.floor(max);
  return Math.floor(Math.random() * (intMax - intMin + 1) + intMin);
}

export default random;
