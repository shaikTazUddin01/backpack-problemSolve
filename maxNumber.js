function maxNumber(a,b,c){
    if (a>b && a>c) {
        return a
    }else if (b>a && b>c) {
        return b
    }else{
        return c
    }
}

const biggernumber=maxNumber(23,45,56)
console.log(biggernumber);