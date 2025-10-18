function secondLarge(arr) {
  let large = 1;
  let secLarge = 0;

  for (const i of arr) {
    if (i > large) {
      secLarge = large;
      large = i;
    } else if (i > secLarge && i < large) {
      secLarge = i;
    }
  }

  return secLarge;
}

console.log(secondLarge([45, 30, 20, 50, 10, 250, 500, 300]));
