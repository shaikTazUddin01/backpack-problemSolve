const countNumber = (arr) => {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive += 1;
    } else if (arr[i] < 0) {
      negative += 1;
    } else {
      zero += 1;
    }
  }
  console.log(`positive number: ${positive} .
     Negative number: ${negative}.
      zero number: ${zero}`);
};

countNumber([10, -2, 0, -1, -5, -7, 3, 0, 5,0]);
