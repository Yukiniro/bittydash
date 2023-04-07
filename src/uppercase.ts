import isString from "./isString";

function uppercase(value: string): string {
  if (!isString(value)) {
    throw new Error(
      `uppercase: parameter \`value\` expected to be a string, but got "${typeof value}"`
    );
  }
  return value.toUpperCase();
}

export default uppercase;
