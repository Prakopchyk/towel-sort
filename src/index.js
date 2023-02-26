
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix == undefined) {
    return [];
  }
  matrix.forEach((element, index) => {
    if (index % 2 == 0) {
      matrix[index] = element;
    }
    else {
      matrix[index] = element.reverse();
    }
  })
  return matrix.flat();
}
