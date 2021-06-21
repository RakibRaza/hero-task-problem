function rotateLeft(n, d, arr) {
  return arr.map(() => {
    d = d < n ? d : 0;
    return arr[d++];
  });
}
console.log(rotateLeft(5, 4, [1, 2, 3, 4, 5]))
console.log(rotateLeft(5, 2, [1, 2, 3, 4, 5]))