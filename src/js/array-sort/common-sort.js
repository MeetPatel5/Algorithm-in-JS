export const sortByAsce = arr => {
  // default Array.prototype.sort will sort in ascending order
  const tempArr = arr.filter(ele => {
    if (typeof ele !== "string") {
      return true;
    } else {
      return false;
    }
  });
  if (tempArr.length === 0) {
    return arr.sort();
  } else {
    return new Error(
      "sortByAsce function can only apply to array of string values"
    );
  }
};

export const sortByDesc = arr => {
  const tempArr = arr.filter(ele => {
    if (typeof ele !== "string") {
      return true;
    } else {
      return false;
    }
  });
  if (tempArr.length === 0) {
    return arr.sort().reverse();
  } else {
    return new Error(
      "sortByDesc function can only apply to array of string values"
    );
  }
};

export const sortByGreaterValue = arr => {
  const tempArr = arr.filter(ele => {
    if (typeof ele !== "number") {
      return true;
    } else {
      return false;
    }
  });
  if (tempArr.length === 0) {
    return arr.sort((a, b) => b - a);
  } else {
    return new Error(
      "sortByGreaterValue function can only apply to array of number values"
    );
  }
};

export const sortBySmallerValue = arr => {
  const tempArr = arr.filter(ele => {
    if (typeof ele !== "number") {
      return true;
    } else {
      return false;
    }
  });
  if (tempArr.length === 0) {
    return arr.sort((a, b) => a - b);
  } else {
    return new Error(
      "sortBySmallerValue function can only apply to array of number values"
    );
  }
};
