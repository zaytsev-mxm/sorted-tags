function shuffle(arr) {
  const arrLen = arr.length;
  const groupSize = 2;
  const partsObj = arr.reduce((acc, el) => {
    const current = acc[el] || [];
    return {
      ...acc,
      [el]: [...current, el],
    };
  }, {});
  const parts = Object.values(partsObj);
  const result = [];

  let i = 0;
  while (result.length !== arrLen) {
    const part = parts[i];
    const nums = part.splice(0, groupSize);
    result.push(...nums);
    i = i + 1 < parts.length ? i + 1 : 0;
  }

  return result;
}

const arr = [1,1,1,2,3,3];
const exp = [1,1,2,3,3,1];