import isString from "./isString";

function lowercase(value: string): string {
  if (!isString(value)) {
    throw new Error("The value must be string");
  }
  return value.toLowerCase();
}

export default lowercase;
