import isUndefined from "./isUndefined";
import random from "./random";
import valueInRange from "./valueInRange";

const signs = "0123456789ABCDEF";
const codeList = [];
for (let i = 0; i < signs.length; i++) {
  codeList.push(signs[i]);
}

/**
 * Get a random color.
 * @param type - The type of color.
 * @param opacity - The opacity of color.
 * @returns  A random color for the specified type
 */
function randomColor(type = "hex", opacity?: number) {
  switch (type) {
    case "hex": {
      let color = "";
      for (let i = 0; i < 6; i++) {
        color += signs[random(0, signs.length - 1)];
      }
      if (!isUndefined(opacity)) {
        const opacityValue = valueInRange(opacity, 0, 1);
        const value = Math.floor(Math.pow(16, 2) * opacityValue);
        const code1 = Math.floor(value / 16);
        const code2 = Math.floor(value % 16);
        color += `${code1}${code2}`;
      }
      return `#${color}`;
    }
    case "rgb": {
      const rValue = random(0, 255);
      const gValue = random(0, 255);
      const bValue = random(0, 255);
      if (isUndefined(opacity)) {
        return `rgb(${rValue}, ${gValue}, ${bValue})`;
      } else {
        const opacityValue = valueInRange(opacity, 0, 1);
        return `rgba(${rValue}, ${gValue}, ${bValue}, ${opacityValue})`;
      }
    }
    case "hsl": {
      const hueValue = random(0, 359);
      const saturationValue = random(0, 100);
      const lightnessValue = random(0, 100);
      if (isUndefined(opacity)) {
        return `hsl(${hueValue}, ${saturationValue}%, ${lightnessValue}%)`;
      } else {
        const opacityValue = valueInRange(opacity, 0, 1);
        return `hsla(${hueValue}, ${saturationValue}%, ${lightnessValue}%, ${opacityValue})`;
      }
    }
    default:
  }
}

export default randomColor;
