function getTagWeight(tag) {
  if (!tag) return -1;
  return tag.category ? parseInt(tag.category.replace(/[^\d]/g, ''), 10) : -1;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPositionForLastElements(arr) {
  const pivot = getRandomInt(0, arr.length - 1);
  const currentEl = arr[pivot];
  const prevEl = arr[pivot - 1];
  const currentWeight = getTagWeight(currentEl);
  const prevWeight = getTagWeight(prevEl);

  const isSiblingsAppropriate = currentWeight > 0 && prevWeight > 0;

  if (isSiblingsAppropriate) {
    return pivot;
  }

  return getPositionForLastElements(arr);
}

function getSortedTags(list) {
  const arr = [...list].sort((a, b) => {
    return getTagWeight(b) - getTagWeight(a);
  });

  const arrLen = arr.length;
  let groupSize = getRandomInt(1, 2);
  const partsObj = arr.reduce((acc, el) => {
    const weight = getTagWeight(el);
    const current = acc[weight] || [];
    return {
      ...acc,
      [weight]: [...current, el],
    };
  }, {});
  let parts = Object.values(partsObj);
  const result = [];

  let i = 0;
  while (result.length !== arrLen) {
    const part = parts[i];
    const partType = getTagWeight(part[0]);
    groupSize = partType === -1 ? 1 : getRandomInt(1, 2);
    const nums = part.splice(0, groupSize);
    if (parts.length === 1) {
      const positionForLastElements = getPositionForLastElements(result);
      result.splice(positionForLastElements, 0, ...nums);
    } else {
      result.push(...nums);
    }
    parts = parts.filter(part => part.length);
    i = i + 1 < parts.length ? i + 1 : 0;
  }

  return result;
}

export {
  getRandomInt,
  getSortedTags,
}