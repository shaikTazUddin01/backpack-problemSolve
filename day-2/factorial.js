function factorial(number) {
  let fac = 1;

  for (let i = 1; i <= number; i++) {
    fac = fac * i;
  }

  return fac;
}

const res = factorial(5);

console.log(res);
