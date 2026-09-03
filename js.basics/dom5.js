//que 1
let newBtn=document.createElement("button");
newBtn.innerText="click me";
console.log(newBtn);

newBtn.style.color = "white";
newBtn.style.backgroundColor ="red";

let div=document.querySelector("body");
div.prepend(newBtn);

//que 2
let para =document.querySelector("p");