const reverseNumber = (number) => {
  let rNum = 0;

  while (number > 0) {
    
    console.log(number);
    let lastDig = number % 10;
    console.log(lastDig);
    rNum = rNum * 10 + lastDig;

    number = Math.floor(number / 10);
  }
  return rNum;
};

console.log(reverseNumber(1234));
