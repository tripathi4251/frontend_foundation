//let heading=document.getElementById("title");
//console.log(heading);
//console.log(heading.textContent);

//let h1=document.getElementsByClassName("heading");
//console.log(h1);
//console.dir(h1);
//console.dir(document.body);

//let heading=document.getElementById("title");
//console.dir(heading);


let heading=document.querySelector("#title");
console.log(heading);
heading.innerText="me";

let para1=document.querySelectorAll(".heading");
console.log(para1);

let W=document.querySelector("h1");
console.log(W);

let Q=document.querySelector(".heading");
console.log(Q);


//let divs= document.querySelectorAll(".box");
//divs[0].innerText="new unique value 1";
//divs[1].innerText="new unique value 2";
//divs[2].innerText="new unique value 3";

let divs=document.querySelectorAll(".box");
let idx=1;
for(div of divs) {
    div.innerText="new unique value ${idx}";
    idx++;
} 