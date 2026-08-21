// Example 1
function substraction(x,y) {
    console.log(x-y);
}

// example 2
function sum(x,y) {
    s=x+y;
    return s;
}

let val=sum(3,4);
console.log(val);


// example 3
function multiply(x,y) {
    return x*y;
}

console.log(multiply(2,3));

//for each function
let arr=["pune","delhi","mumbai"];
arr.forEach((val) =>  {
console.log(val);
})

// for a given array of numbers , print the square of each value using the foreach loop..
let nums=[67,52,39];
nums.forEach((num) => {
    console.log(num*num);
});

// map function
let num=[67,52,39];
num.map((val) => {
    console.log(val);
});

// for square roots
let n = [67,72,49];
let newarr =n.map((val) => {
    return val*val;
});