function sumofNumber(arr){
    let sum=0;
    for (const i of arr) {
        sum=sum+i
    }
return sum
}

console.log(sumofNumber([2,0,4,5,4,7,5,8,7,8]));