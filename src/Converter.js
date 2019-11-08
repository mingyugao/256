import Diff from 'color-diff';

let data;
const publicPath = process.env.NODE_ENV === 'development'
  ? ''
  : '/color-converter';

const getData = async () => {
  if (!data) {
    const response = await fetch(`${publicPath}/data.json`);
    data = await response.json();
  }
  return data;
};

const isHex = string => {
  return (
    string.startsWith('#') &&
    string.length === 7 &&
    string.substring(1).toLowerCase().split('').every((digit) => {
      return '0123456789abcdef'.split('').includes(digit);
    })
  );
};

const isRGB = string => {
  string = string.toLowerCase().replace(/\s/g,'');
  if (string.startsWith('rgb(') && string.endsWith(')')) {
    const nums = string.substring(4, string.length - 1).split(',');
    return (
      nums.length === 3 &&
      nums.every(member => {
        const num = parseFloat(member);
        return (
          !isNaN(num) &&
          Number.isInteger(num) &&
          num >= 0 &&
          num <= 255
        );
      })
    );
  };
  return false;
};

const parseHex = hexString => {
  const numsString = hexString.substring(1);
  const rStr = numsString.substring(0, 2);
  const gStr = numsString.substring(2, 4);
  const bStr = numsString.substring(4, 6);

  const convertDigit = digit => {
    const mapToNum = char => {
      if (isNaN(parseInt(char))) {
        return {
          'a': 10,
          'b': 11,
          'c': 12,
          'd': 13,
          'e': 14,
          'f': 15
        }[char.toLowerCase()];
      }
      return parseInt(char);
    };

    const firstChar = digit.substring(0, 1);
    const secondChar = digit.substring(1);
    return mapToNum(firstChar) * 16 + mapToNum(secondChar);
  };

  return {
    R: convertDigit(rStr),
    G: convertDigit(gStr),
    B: convertDigit(bStr)
  };
};

const parseRGB = rgbString => {
  rgbString = rgbString.replace(/\s/g,'');
  const nums = rgbString
    .substring(4, rgbString.length - 1)
    .split(',')
    .map(num => parseInt(num));

  return {
    R: nums[0],
    G: nums[1],
    B: nums[2]
  };
};

const parseToAbstractRGB = input => {
  if (isHex(input)) {
    return parseHex(input);
  } else if (isRGB(input)) {
    return parseRGB(input);
  }
  return null;
};

const preprocessPalette = colors => {
  return colors.data.map(color => ({
    ...color,
    R: color.rgb.r,
    G: color.rgb.g,
    B: color.rgb.b
  }));
};

const sortByClosest = (origin, palette) => {
  const results = [];

  const helper = newPalette => {
    if (!newPalette.length) return;
    const closest = Diff.closest(origin, newPalette);
    results.push(closest);
    const filtered = newPalette.filter(color => {
      return color.colorId !== closest.colorId;
    });
    helper(filtered);
  };

  helper(palette);
  return results;
};

const postprocessPalette = colors => {
  return colors.map(color => ({
    ...color,
    rgb: `rgb(${color.rgb.r},${color.rgb.g},${color.rgb.b})`,
    hsl: `hsl(${color.hsl.h},${color.hsl.s}%,${color.hsl.l}%)`,
  }));
};

const findSimilar = input => {
  return new Promise(async (res, rej) => {
    const colors = await getData();
    const palette = preprocessPalette(colors);
    const origin = parseToAbstractRGB(input);

    if (!origin) {
      return rej(`${input} is not a valid HEX or RGB color.`);
    }

    let results = sortByClosest(origin, palette);
    results = postprocessPalette(results);

    res(results);
  });
};

export default { findSimilar };
