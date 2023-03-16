import isString from "./isString";

function uppercase(value: string): string {
  if (!isString(value)) {
    throw new Error("The value must be string");
  }
  return value.toUpperCase();
}

export default uppercase;
