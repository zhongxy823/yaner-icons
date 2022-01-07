/**
 * @param {string | string[] | undefined} color
 * @param {number} index
 * @param {string} defaultColor
 * @return {string}
 */
 export const getIconColor = (_color, index, defaultColor) => {
  let color = _color
  if (typeof isStr(_color)) {
    color = _color?.indexOf('#') === 0 ? hex2rgb(color) : color;
  } else {
    color = color?.map(item => {
      return item.indexOf('#') === 0 ? hex2rgb(item) : item;
    });
  }
  return color
    ? (
      typeof color === 'string'
        ? color
        : color[index] || defaultColor
    )
    : defaultColor;
};

export const hex2rgb = function(hex) {
  const rgb = [];

  hex = hex.substr(1);

  if (hex.length === 3) {
    hex = hex.replace(/(.)/g, '$1$1');
  }

  hex.replace(/../g, color => {
    // @ts-ignore
    rgb.push(parseInt(color, 0x10));
    return color;
  });

  return `rgb(${rgb.join(',')})`;
};

export const isStr = str => typeof str === 'string';