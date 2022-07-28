import isArray from "./isArray";

function uniq(value: Array<any>): Array<any> {
  if (!isArray(value)) {
    throw new Error("The value must be array");
  }
  return Array.from(new Set(value));
}

export default uniq;
