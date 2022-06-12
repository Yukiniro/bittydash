import isEven from "./isEven";

function isOdd(value: number) {
  return !isEven(value);
}

export default isOdd;
