export const chunkArr = (arr, chunkSize) => {
  // This array will have array of element
  // like [[1,2],[3]]
  const mainChunked = [];

  // loop over original array
  for (const ele of arr) {
    const lastChunk = mainChunked[mainChunked.length - 1];

    if (!lastChunk || lastChunk.length === chunkSize) {
      // push a new sub arr with element
      mainChunked.push([ele]);
    } else {
      lastChunk.push(ele);
    }
  }
  return mainChunked;
};
