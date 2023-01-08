
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const result = [];

  if (!matrix) return result;

  matrix.forEach((el, ind) => {
    if (ind % 2 === 0) {
      result.push(...el);
    } else {
      result.push(...el.reverse());
    }
  });

  return result;
}

