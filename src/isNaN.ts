function isNaN(value: any): boolean {
  return typeof value === "number" && value !== value;
}

export default isNaN;
