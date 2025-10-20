//way-1
const arr1 = [1, 2, 4, 5];
const arr2 = [3, 4, 5, 6];

let newArr = arr1;

for (const i of arr2) {
  if (!newArr.includes(i)) {
    newArr.push(i);
  }
}

for (let i = 0; i < newArr.length; i++) {
  for (let j = i + 1; j < newArr.length; j++) {
    if (newArr[i] > newArr[j]) {
      let temp = newArr[i];
      newArr[i] = newArr[j];
      newArr[j] = temp;
    }
  }
}

// console.log(newArr);

// way 2

const firstArr=[2,3,4,5,6,9]
const SecondArr=[4,5,6,7,8]

const sceWayArr=[...new Set([...firstArr,...SecondArr])].sort((a,b)=>a-b
)
console.log(sceWayArr);