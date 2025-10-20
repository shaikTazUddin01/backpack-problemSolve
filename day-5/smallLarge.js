const findSmallLargeNUmber = (arr) => {
  let large = arr[0];
  let small = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      large = arr[i];
    }
    if (small > arr[i]) {
      small = arr[i];
    }
  }
  return {
    small,
    large,
  };
};

console.log(findSmallLargeNUmber([45, 20, 65, 2, 12]));
