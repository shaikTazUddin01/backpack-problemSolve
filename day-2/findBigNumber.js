function checkBigNumberInArray(arr) {
  let bigNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      bigNumber = arr[i + 1];
    }
  }
  return bigNumber;
}

console.log(checkBigNumberInArray([12, 34, 32, 10, 50, 10, 100]));
