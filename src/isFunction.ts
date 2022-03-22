function isFunction(value: any): boolean {
  return Object.prototype.toString.call(value) === "[object Function]";
}

export default isFunction;
