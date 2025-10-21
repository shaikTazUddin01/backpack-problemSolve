function findSecondLargest(arr) {
  if (arr.length < 2) {
    return "Array must have at least two elements";
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity
    ? "All numbers are equal"
    : secondLargest;
}


const numbers = [10, 25, 47, 89, 89, 36];
console.log("Second Largest:", findSecondLargest(numbers));
