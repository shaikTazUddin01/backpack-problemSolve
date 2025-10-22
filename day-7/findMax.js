const number=[1,2,3,4,5];

const findMax=number.reduce((acc,curr)=>(acc>curr?acc:curr),0)

console.log(findMax);