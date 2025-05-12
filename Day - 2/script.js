
/* ----------------------------------------------- Objects ----------------------------------------------- */
console.log("Hello, World!");
let channel_name = "Programming Hero"
let_videos = 101
let Subscribe = 1000000

// Object declaration
/*
    Key, Value
*/
let ChannelInfo = {
    channel_name: "Programming Hero",
    videos: 101,
    Subscribes: 1000000
}


let product = {
    title : "Sunglass",
    prices : 99,
    discount : 67,
}

console.log(product)
console.log(product.title)
console.log(product["prices"])


/* ------------------------------------------------------- Loops ------------------------------------------------------- */
/* 
    1. For Loop
    2. While Loop
    3. Do While Loop
    4. For of Loop
    5. For in Loop
    6. For Each Loop

    1. For Loop:
        for (initialization; condition; increment/decrement) {
            // code block to be executed
        }
*/

// For Loop
for (let i = 0; i < 10; i++){
    console.log(i);
}

// While Loop
let i = 0
while (i < 10){
    console.log(i);
    i++;
}

// Do While Loop
let j = 0
do {
    console.log(j);
    j++;
}while (j < 10);

// For of Loop
let fruits = ["apple", "banana", "orange"]
for (let fruit of fruits){
    console.log(fruit);
}

// For in Loop
let person = {
    name: "John",
    age: 30,
    city: "New York"
}

for (let key in person){
    console.log(key + ": " + person[key]);
}

// For Each Loop

let numbers = [1, 2, 3, 4, 5]
numbers.forEach(function(number){
    console.log(number);
})



/* ------------------------------- Task ------------------------------------ */

// For a given array with prices of 5 items - [250,654,789, 456, 123] - remove 10% of every item and print the final price of each item

let prices = [250, 654, 789, 456, 123]
let finalPrices = 0;
for (let i = 0; i < prices.length; i++){
    let discount = prices[i] * 0.10
    finalPrices += (prices[i] - discount)
}

console.log(finalPrices)