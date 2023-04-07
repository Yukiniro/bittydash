import isArray from "./isArray";
import isMap from "./isMap";
import isObject from "./isObject";
import isSet from "./isSet";

/**
 * @description Create a clone of value
 * @param value - The value to clone.
 * @param deep - Is recursively for the clone.
 * @returns Return the cloned value.
 */
function clone<T>(value: T, deep = false): T {
  const cache = [];
  const baseClone = (value: any, deep = false) => {
    if (isArray(value)) {
      if (deep) {
        return value.map((v: any) => {
          if (cache.includes(v)) {
            return v;
          } else {
            cache.push(v);
            return baseClone(v, deep);
          }
        });
      } else {
        return [...value];
      }
    }

    if (isObject(value)) {
      if (deep) {
        const obj = {};
        Object.keys(value).forEach((key) => {
          if (cache.includes(value[key])) {
            obj[key] = value[key];
          } else {
            cache.push(value[key]);
            obj[key] = baseClone(value[key], deep);
          }
        });
      } else {
        return { ...value };
      }
    }

    if (isMap(value) || isSet(value)) {
      const t = isMap(value) ? new Map() : new Set();
      const iterator = value.entries();
      while (true) {
        const { value, done } = iterator.next();
        if (done) {
          break;
        }
        let item = null;
        if (cache.includes(value[1])) {
          item = value[1];
        } else {
          item = baseClone(value[1], deep);
          cache.push(item);
        }
        if (isMap(t)) {
          (t as Map<any, any>).set(value[0], item);
        } else {
          (t as Set<any>).add(item);
        }
      }
    }

    return value;
  };
  return baseClone(value, deep);
}

export default clone;
