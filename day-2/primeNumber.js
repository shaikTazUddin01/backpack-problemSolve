const number = 7;

let isPrime = true;
if (number <= 1) {
  isPrime = false;
}
for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime);
