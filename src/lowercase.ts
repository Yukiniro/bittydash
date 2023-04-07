import isString from "./isString";

function lowercase(value: string): string {
  if (!isString(value)) {
    throw new Error(
      `lowercase: parameter \`value\` expected to be a string, but got "${typeof value}"`
    );
  }
  return value.toLowerCase();
}

export default lowercase;
