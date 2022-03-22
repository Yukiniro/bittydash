import isArray from "./isArray";
import isFunction from "./isFunction";

function remove(value: any, checker: any) {
  if (!isArray(value)) {
    throw new Error("value must be array");
  }
  const newArray = value.filter((item: any) => {
    return isFunction(checker) ? !checker(item) : checker !== item;
  });
  value.length = 0;
  value.push(...newArray);
}

export default remove;
