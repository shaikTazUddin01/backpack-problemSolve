function checkBigNumberInArray(arr) {
  let bigNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (bigNumber < arr[i]) {
      bigNumber = arr[i];
    }
  }
  return bigNumber;
}

console.log(checkBigNumberInArray([150,12, 34, 32, 10, 50, 10, 100]));
