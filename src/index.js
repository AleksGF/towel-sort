
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const result = [];

  if (!matrix) return result;

  matrix.forEach((el, ind) => {
    result.push(...(ind % 2 === 0 ? el : el.reverse()));
  });

  return result;
}

