import { reverseString1 } from "../string-reversal/string-reversal";

export const checkPalindrome1 = str => {
  // use any string reversal method
  const reversedStr = reverseString1(str).toLowerCase();
  return reversedStr === str.toLowerCase() ? true : false;
};

export const checkPalindrome2 = str => {
  // not by using str reversal method
  const strArr = Array.from(str.toLowerCase());
  return strArr.every((currChar, i) => {
    return currChar === str.toLowerCase()[str.length - i - 1];
  });
};
