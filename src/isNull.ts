function isNull(value: any): boolean {
  return !value && typeof value === "object";
}

export default isNull;
