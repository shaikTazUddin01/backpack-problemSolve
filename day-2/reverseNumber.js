function reverseNumber(number) {
  let reverse = 0;
  while (number > 0) {
    let lastDigite = number % 10;
    reverse = reverse * 10 + lastDigite;
    number = Math.floor(number / 10);
  }

  console.log(reverse);
}

reverseNumber(1345);
