import { isNumber } from "./index";

function fixed(value: any, digits = 0): number {
  if (!isNumber(value)) {
    throw new Error("Value must be number");
  }
  return Number(value.toFixed(digits));
}

export default fixed;
