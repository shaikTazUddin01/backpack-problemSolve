function findSmallNumber(arr){
    let small=arr[0]

    for (let i = 0; i < arr.length; i++) {
    if (small > arr[i]) {
      small = arr[i];

    }
   
  }
  return small
}

console.log(findSmallNumber([3,5,4,7,1]));