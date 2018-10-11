export const reverseString1 = str => {
  return str
    .split("")
    .reverse()
    .join("");
};

export const reverseString2 = str => {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr = reverseStr + str[i];
  }
  return reverseStr;
};

export const reverseString3 = str => {
  let reverseStr = "";
  for (let char of str) {
    reverseStr = char + reverseStr;
  }
  return reverseStr;
};
export const reverseString4 = str => {
  return str.split("").reduce((acm, char) => (acm = char + acm), "");
};
