import { makeCleanStrObjWithCount, makeCleanString } from "../helper/helper";

export const checkAnagram1 = (str1, str2) => {
  const str1Obj = makeCleanStrObjWithCount(str1);
  const str2Obj = makeCleanStrObjWithCount(str2);

  // Check number of keys in each object
  if (Object.keys(str1Obj).length !== Object.keys(str2Obj).length) {
    return false;
  }

  // check values of keys are same
  for (let key in str1Obj) {
    if (str1Obj[key] !== str2Obj[key]) {
      return false;
    }
  }

  return true;
};

export const checkAnagram2 = (str1, str2) => {
  return makeCleanString(str1) === makeCleanString(str2);
};
