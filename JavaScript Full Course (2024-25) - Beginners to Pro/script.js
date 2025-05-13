// Print Hello world 5 time


for(let i = 1; i <= 5; i++){
    console.log("Hello World");
}

let array = [1,2,3,4,5]
let sum = 0;

for(let i = 0; i < 5; i++){
    sum += array[i];
}
console.log("Sum ",sum);


// String method
/*
    1. str.toUpperCase
    2. str.toLowerCase
    3. str.trim() Remove All whitespace
*/


/* Function */
// Arrow Function

const arrow = (a,b) => {
    return a*b;
};


console.log(arrow(2,4))


function countVowels(str){
    let count = 0;
    for(const char of str){
        if(
            char == "a" ||
            char == "e" ||
            char == "i" ||
            char == "o" ||
            char == "u"
        ){
            count++;
        }
    }
    return count;
}

let res = countVowels("aila jadu");
console.log(res)