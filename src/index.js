
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined || matrix.length == 0) {
      return [];
    } else {
      return matrix.reduce((prev, current, init) => {
        current.sort((a, b) => !(init & 1) ? a - b : b - a).map(e => prev.push(e));
        return prev;
      }, [])
    }   
}
