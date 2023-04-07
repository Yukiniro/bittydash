import isString from "./isString";
import uppercase from "./uppercase";

function capitalize(value: string): string {
  if (!isString(value)) {
    throw new Error(
      `capitalize: parameter \`value\` expected to be a string, but got "${typeof value}"`
    );
  }
  if (value.at) {
    return `${uppercase(value.at(0))}${value.slice(1)}`;
  }
  return `${uppercase(value.charAt(0))}${value.slice(1)}`;
}

export default capitalize;
