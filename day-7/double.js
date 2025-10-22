const number = [1, 2, 3, 4, 5, 10, 12, 15];

const squareNumber = number
  
  .filter((element) => 
   element>10
  ).map((element) => element * 2);

console.log(squareNumber);
