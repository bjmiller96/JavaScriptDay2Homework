//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let displayFavFood = (obj) => {
    for(let key in obj){
        let value = obj[key];

        if(typeof value == "string"){
            console.log(`${key}: \n    - ${value}`)
        } else if(Array.isArray(value)){
            console.log(`${key}: `)
            for(let i of value){
                if(typeof i == "object"){
                    displayFavFood(i);
                } else{
                    console.log(`    - ${i}`);
                }
            }
        } else if(typeof value == "object"){
            console.log(`${key}:`);
            displayFavFood(value);
        }
    }
}

displayFavFood(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`This person's name is ${this.name} and they are ${age} years old.`);
    }

    this.addAge = (add_to_age = 1) => {
        this.age += add_to_age;
        console.log(`${this.name}'s new age is ${this.age}.`)
    }
}

let person1 = new Person('Brandon', 27)
person1.printInfo();
person1.addAge(3);

let person2 = new Person('Jasper', 5)
person2.printInfo();


//=============Exercise #3============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let stringLength = str => {
    return new Promise((resolve, reject) =>{
        if(str.length > 10){
            console.log("Big Word")
            resolve(str.length)
        } else if(str.length < 10){
            console.log("Small Number")
            reject(str.length)
        } else {
            console.log(`The string is exactly ${str.length}. Not sure what to do here...`)
        }
    })
}

stringLength("I love my dogs!")
// .then(result =>{
//     console.log(`The string provided has a length of ${result}.`)
// })
// .catch(error => {
//     console.log(`The string provided only has a length of ${error}.`)
// })


//=============Code Wars Problems============//
//=============Problem #1============//: Count by X (First attempt in JavaScript only)
/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).
*/

function countBy(x, n) {
    let z = [];
    for(let i = 1; i <= n; i++){
        let multiple = i * x;
        z.push(multiple);  
    }
    return z;
}

console.log(countBy(1, 10));
console.log(countBy(2, 5));

//=============Problem #2============//: Testing 1-2-3 (Recreated in JavaScript from Python attempt)
/*
Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.
*/

let number = function(array){
    let new_arr = [];

    if(array == 0){
        return array;
    } else {
        for(let i = 0; i < array.length; i++){
        new_arr.push(`${i + 1}: ${array[i]}`)
        }
        return new_arr;
    }
}

console.log(number(["a", "b", "c", "d", "e", "f", "g"]))
console.log(number([]))