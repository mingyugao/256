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
    r: convertDigit(rStr),
    g: convertDigit(gStr),
    b: convertDigit(bStr)
  };
};

const parseRGB = rgbString => {
  rgbString = rgbString.replace(/\s/g,'');
  const nums = rgbString
    .substring(4, rgbString.length - 1)
    .split(',')
    .map(num => parseInt(num));

  return {
    r: nums[0],
    g: nums[1],
    b: nums[2]
  };
};

const parseToRGB = input => {
  let origin;
  if (isHex(input)) {
    origin = parseHex(input);
  } else if (isRGB(input)) {
    origin = parseRGB(input);
  } else {
    throw new Error();
  }
  return origin;
};

const computeColorDistance = (
  color1,
  color2
) => {
  return new Promise((res, rej) => {
    res(
      Math.pow(color1.r - color2.r, 2) +
      Math.pow(color1.g - color2.g, 2) +
      Math.pow(color1.b - color2.b, 2)
    );
  });
};

const computeSimilarity = (distance, maxDistance) => {
  return 100 - Math.round((distance / maxDistance) * 100);
};

const findSimilarEuclidean = input => {
  return new Promise(async (res, rej) => {
    const colors = await getData();
    let origin;

    try {
      origin = parseToRGB(input);
    } catch (e) {
      return rej(`${input} is not a valid HEX or RGB color.`);
    }

    const distancesToCompute = [];
    colors.data.forEach(color => {
      distancesToCompute.push(computeColorDistance(color.rgb, origin));
    });

    const distances = await Promise.all(distancesToCompute);
    const maxDistance = Math.max(...distances);

    const results = colors.data.map((color, index) => ({
      ...color,
      rgb: `rgb(${color.rgb.r},${color.rgb.g},${color.rgb.b})`,
      hsl: `hsl(${color.hsl.h},${color.hsl.s}%,${color.hsl.l}%)`,
      similarity: computeSimilarity(distances[index], maxDistance)
    }));
    results.sort((a, b) => b.similarity - a.similarity);

    return res(results);
  });
};

export default { findSimilarEuclidean };
