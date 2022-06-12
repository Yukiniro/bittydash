import isNumber from "./isNumber";

function isEven(value: any): boolean {
  if (!isNumber(value)) {
    throw new Error("The value must be number");
  }
  return value % 2 === 0;
}

export default isEven;
