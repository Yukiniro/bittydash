import { Size, BoundSize } from "./types";

function throwError(message: string) {
  throw new Error(message);
}

function calcBoundSize(baseSize: Size, targetSize: Size): BoundSize {
  const { width: bWidth, height: bHeight } = baseSize;
  const { width: tWidth, height: tHeight } = targetSize;
  const ratioForBaseSize = bWidth / bHeight;
  return {
    sizeFreezeWidth: {
      width: tWidth,
      height: tWidth / ratioForBaseSize,
    },
    sizeFreezeHeight: {
      width: tHeight * ratioForBaseSize,
      height: tHeight,
    },
  };
}

export { throwError, calcBoundSize };
