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

export const makeCleanStrObjWithCount = str => {
  const cleanedObjWithCount = {};

  // Remove extra spaces, special char and then loop
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    cleanedObjWithCount[char] = cleanedObjWithCount[char] + 1 || 1;
  }
  return cleanedObjWithCount;
};

const makeCleanString = str => {};
