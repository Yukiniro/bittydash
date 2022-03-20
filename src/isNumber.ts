function isNumber(value: any): boolean {
  // NaN !== NaN
  return typeof value === "number" && value === value;
}

export default isNumber;
