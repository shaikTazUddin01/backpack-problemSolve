function divisibalBy3Or5(number){
    let arr=[]
    for (let i = 1; i <= number; i++) {
       if (i%3==0 || i%5==0) {
        arr.push(i)
    }
}

    return arr
}

console.log(divisibalBy3Or5(20))