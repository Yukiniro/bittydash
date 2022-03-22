function isMap(value: any): boolean {
  return Object.prototype.toString.call(value) === "[object Map]";
}

export default isMap;
