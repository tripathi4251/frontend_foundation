// Example 1
function multiply(a,b) {
    return (a*b);
}
    let result= multiply(4,3);
     console.log(result);


//Example 2
 function add(a,b) {
    return a+b;
 }

 let sum1= add(5,6);
 let sum2 = add(50,50);

 console.log(sum1 , sum2);

 // Arrow function

 function sum(a,b) {
    return a+b;
 }
 const arrowsum =(a,b) => {
    console.log(a+b);
 };

// create a function usinfg the "function" keyword that takes a string as an argument & returns the number of vowels in the string
function countvowels(str) {
    let count = 0;
for (const char of str) {
    if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u" 
     ) {
        count ++;
    }
    return count++;
}
}