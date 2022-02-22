
module.exports = function towelSort (matrix) {
  let result = [];
  if(matrix === undefined) {
    return result;
  } else {
    const newArr = matrix.map((item, i) => {
      if(i % 2 === 0) {
          return matrix[i];
      } else {
          return matrix[i].reverse();
      }
  });
  newArr.map((item, i) => {
      result = result.concat(item);
      return result;
  });
  return result;
  }
};
