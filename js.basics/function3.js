//filter 
let arr1=[1,2,3,4,5,6,7];
let evenarr =arr1.filter((val) => {
    return val>3;

});

console.log(evenarr);

//we are given array of marks of students. filter out of the marks of the student that scores 90%..
let marks = [97,64,32,49,99,96,86];
let toppers=marks.filter((val) => {
    return val>90;
});

console.log(toppers);