export const uniqueArr = array => {
  // indexOf => returns first position of ele in array
  return array.filter((ele, i) => {
    // console.log(`${array.indexOf(ele)} ? === ${i}`); => this is what happen under the hood
    // if return true , then keep it else remove it
    // it'll keep all the same value having different types
    return array.indexOf(ele) === i;
  });
};
