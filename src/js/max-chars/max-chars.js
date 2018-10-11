export const makeObjWithCount = str => {
  //  "sample is sample"
  const charsObj = {};
  for (let char of str.toLowerCase()) {
    if (!charsObj[char]) {
      charsObj[char] = 1;
    } else {
      charsObj[char] = charsObj[char] + 1;
    }
  }
  return charsObj;
};

export const getMaxChar = str => {
  const charsObjWithCount = makeObjWithCount(str);
  let maxCountValue = 0;
  let maxCountChar = "";
  Object.keys(charsObjWithCount).forEach(char => {
    if (charsObjWithCount[char] > maxCountValue) {
      maxCountValue = charsObjWithCount[char];
      maxCountChar = char;
    }
  });
  return { [maxCountChar]: maxCountValue };
};
