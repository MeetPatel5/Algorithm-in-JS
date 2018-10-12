import { makeObjWithCount } from "../helper/helper";

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
