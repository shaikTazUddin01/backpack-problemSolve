## 1.Task: Array Filtering and Mapping

**Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.**

**Solution :**</br>
//the array is </br>
const person=[
    {
        name:"taz",
        age:24,
        gender:"Male"
    },
    {
        name:"raz",
        age:"26",
        gender:"Male"
    },
    {
        name:"rani",
        age:22,
        gender:"Female"
    },
    {
        name:"ritu",
        age:24,
        gender:"Female"
    }
]

//filter out all Females </br>
const remaingPeople=person.filter((item)=>item?.gender !=="Female")

//remaing people name </br>
const names=remaingPeople?.map(item=>(item?.name))

console.log(names)

//output </br>
**output is:**</br>
["taz","raz"]

</br>

## 2.Task: Object Manipulation.
**Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.**

**Solution:**</br>
//the array is</br>
const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951
    }
];

//create function</br>
const bookTitle=(array)=>{

const titles=array?.map((book)=>(book?.title))


return titles;

}

console.log(bookTitle(books));

//output </br>
**output is:**</br>
["To Kill a Mockingbird","1984","The Great Gatsby","The Catcher in the Rye"]

</br>

## 3.Task: Function Composition

**Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.**

**Solution:**

//square function </br>
const squFunc=(number)=>{</br>
return number*number
</br>
}

//double function </br>
const doubFunc=(number)=>{</br>
return number*2
</br>
}

//add 5 number function </br>
const addNubFunc=(number)=>{</br>
return number+5
</br>
}

//create a new function to Compose these functions</br>
const newFunc =(number)=>{</br>
    const square=squFunc(number)</br>
    const double=doubFunc(square)</br>
    const add=addNubFunc(double)</br>

return add

}

//call the function </br>
const result = newFunc(5)

console.log("the result is:",result)

//output</br>
**output is:**</br>
the result is:55

</br>

## 4.Task: Sorting Objects

**Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.**

**Solution:**</br>
//the array is </br>
const car=[
    { make: 'Toyota', model: 'Camry', year: 2020 },
    { make: 'Honda', model: 'Accord', year: 2019 },
    { make: 'Ford', model: 'Mustang', year: 2021 },
    { make: 'Chevrolet', model: 'Malibu', year: 2018 },
    { make: 'Tesla', model: 'Model 3', year: 2022 }
]

//sort by assending using sort function </br>
const sort=car.sort((a,b)=>(a.year-b.year))

console.log(sort);

//output </br>
**output is:**</br>
[
  { make: 'Chevrolet', model: 'Malibu', year: 2018 },
  { make: 'Honda', model: 'Accord', year: 2019 },
  { make: 'Toyota', model: 'Camry', year: 2020 },
  { make: 'Ford', model: 'Mustang', year: 2021 },
  { make: 'Tesla', model: 'Model 3', year: 2022 }
]

</br>

## 5.Task: Find and Modify

**Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.**

**Solution:**</br>
//the array is</br>
const people = [
    { name: "taz", age: 30 },
    { name: "raz", age: 25 },
    { name: "jony", age: 35 },
    { name: "bony", age: 28 }
];


const updatePersonAge=(array,name,newAge)=>{
</br>
    const person = array.find((item)=>item?.name==name)
</br>
    if(person){</br>
        person.age=newAge</br>
    }else{</br>
        console.log(`${name} not found.`);</br>
    }
</br>
    console.log(array)</br>
}

//call the function </br>
updatePersonAge(people,"taz",25)

</br>
//output </br>

**output is:**</br>
[
    { name: "taz", age: 25 },
    { name: "raz", age: 25 },
    { name: "jony", age: 35 },
    { name: "bony", age: 28 }
]


