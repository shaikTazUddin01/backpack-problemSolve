let num = 123;
// let numbers=num.toString()

let sum = 0;
// for (let i of numbers) {
//    sum=sum + Number(i)

// }

// for (let i = num; i > 0; i = Math.floor(i / 10)) {
//   sum = sum + (i % 10);
// }

while (num > 0) {
  sum = sum + (num % 10);

  num = Math.floor(num / 10);
}

console.log(sum);
