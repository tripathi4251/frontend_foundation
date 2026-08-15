// looping over an array

/*
let heroes =["ironman","thor","hulk","shaktiman","antman"];
for (let hero of heroes) {
    console.log(hero);
}
    */

/*
let cities = ["delhi", "pune" , "mumbai", "hyderabad" , "gurgaon"];
for (let city of cities) {
    console.log(city);
}
*/

// for a given array with marks of students [85,97,44,37,76,60]
let marks =[85,97,44,37,76,60];
let sum=0;

for (let val of marks) {
    sum+=val;
}

let avg = sum/marks.length;
console.log ("avg marks of the class=" , (avg));


// for a given array with prices of 5 items [250,645,300,900,50]. all items have an offer of 10% off on them. change the array to store final price after applying  offer..
let items =[250,645,300,900,50];
let i=0;
for (let val of items) {
let offer=val/10;
items[i]=items[i]-offer;
console.log ("value after offer =", (items[i]));
i++;
}