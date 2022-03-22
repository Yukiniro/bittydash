import isArray from "./isArray";
import isMap from "./isMap";
import isNaN from "./isNaN";
import isObject from "./isObject";
import isSet from "./isSet";

function isEqual(value: any, other: any): boolean {
  if (isNaN(value) && isNaN(other)) {
    return true;
  }

  if (isArray(value) && isArray(other)) {
    if (value.length !== other.length) {
      return false;
    }
    let index = 0;
    while (index < value.length) {
      if (!isEqual(value[index], other[index])) {
        return false;
      } else {
        index++;
      }
    }
    return true;
  }

  if (isObject(value) && isObject(other)) {
    const valueKeys: Array<string> = Object.keys(value);
    const otherKeys: Array<string> = Object.keys(other);
    if (valueKeys.length !== otherKeys.length) {
      return false;
    }
    if (
      valueKeys.findIndex((v) => !otherKeys.includes(v)) !== -1 ||
      otherKeys.findIndex((v) => !valueKeys.includes(v)) !== -1
    ) {
      return false;
    }
    return valueKeys.every((v) => isEqual(value[v], other[v]));
  }

  if ((isMap(value) && isMap(other)) || (isSet(value) && isSet(other))) {
    if (value.size !== other.size) {
      return false;
    }
    const iterator1 = value.entries();
    const iterator2 = other.entries();
    while (true) {
      const { value: value1, done: done1 } = iterator1.next();
      const { value: value2, done: done2 } = iterator2.next();
      if (done1 && done2) {
        break;
      } else {
        if (isMap(value)) {
          if (!isEqual(value1[0], value2[0])) {
            return false;
          }
        }
        if (isEqual(value1[1], value2[1])) {
          continue;
        } else {
          return false;
        }
      }
    }
    return true;
  }

  return value === other;
}

export default isEqual;
