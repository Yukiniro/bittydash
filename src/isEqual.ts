import isArray from "./isArray";
import isMap from "./isMap";
import isNaN from "./isNaN";
import isObject from "./isObject";
import isSet from "./isSet";

/**
 * @description Determine if two values are equal by deep comparison.
 * @param value - The value to compare.
 * @param other - The other value to compare.
 * @returns Return true if equal, else false.
 */
function isEqual(value: unknown, other: unknown): boolean {
  const cache = [];
  const hasCache = (value: unknown, other: unknown) => {
    return !!cache.find((c) => c.value === value && c.other === other);
  };
  const addCache = (value: unknown, other: unknown) => {
    if (!hasCache(value, other)) {
      cache.push({ value, other });
    }
  };
  const isBaseEqual = (value: unknown, other: unknown): boolean => {
    if (isNaN(value) && isNaN(other)) {
      return true;
    }

    if (isArray(value) && isArray(other)) {
      if (
        (value as Array<unknown>).length !== (other as Array<unknown>).length
      ) {
        return false;
      }
      let index = 0;
      while (index < (value as Array<unknown>).length) {
        if (hasCache(value[index], other[index])) {
          index++;
        } else {
          addCache(value[index], other[index]);
          if (isBaseEqual(value[index], other[index])) {
            index++;
          } else {
            return false;
          }
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
      return valueKeys.every((v) => {
        if (hasCache(value[v], other[v])) {
          return true;
        } else {
          addCache(value[v], other[v]);
          return isBaseEqual(value[v], other[v]);
        }
      });
    }

    if ((isMap(value) && isMap(other)) || (isSet(value) && isSet(other))) {
      if (
        (value as Map<unknown, unknown> | Set<unknown>).size !==
        (other as Map<unknown, unknown> | Set<unknown>).size
      ) {
        return false;
      }
      const iterator1 = (
        value as Map<unknown, unknown> | Set<unknown>
      ).entries();
      const iterator2 = (
        other as Map<unknown, unknown> | Set<unknown>
      ).entries();
      while (true) {
        const { value: value1, done: done1 } = iterator1.next();
        const { value: value2, done: done2 } = iterator2.next();
        if (done1 && done2) {
          break;
        } else {
          if (isMap(value)) {
            if (
              !hasCache(value1[0], value2[0]) &&
              !isBaseEqual(value1[0], value2[0])
            ) {
              return false;
            }
          }

          if (hasCache(value1[1], value2[1])) {
            continue;
          } else {
            addCache(value1[1], value2[1]);
            if (isBaseEqual(value1[1], value2[1])) {
              continue;
            } else {
              return false;
            }
          }
        }
      }
      return true;
    }

    return value === other;
  };

  return isBaseEqual(value, other);
}

export default isEqual;
