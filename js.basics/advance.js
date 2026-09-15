function greet(name,callback){
    console.log("hello" + name);
    callback();
}


function saybye() {
    console.log("goodbye!");
}

greet("akshat",saybye);


function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,callback){
    callback(a,b);
}
calculator(1,2,sum);


console.log("start");
setTimeout(function () {
    console.log("task finished");

}, 2000);
console.log("end");