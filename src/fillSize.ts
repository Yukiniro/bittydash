import { Size } from "./types";
import { calcBoundSize } from "./util";

/**
 * @description Calculate the minimum size baseSize fits into targetSize with constant scaling
 * @category Size
 * @param {Size} baseSize
 * @param {Size} targetSize
 * @returns {Size}
 */
function fitSize(baseSize: Size, targetSize: Size): Size {
  const { sizeFreezeWidth, sizeFreezeHeight } = calcBoundSize(
    baseSize,
    targetSize
  );
  if (
    sizeFreezeWidth.width >= targetSize.width &&
    sizeFreezeWidth.height >= targetSize.height
  ) {
    return sizeFreezeWidth;
  } else {
    return sizeFreezeHeight;
  }
}

export default fitSize;
