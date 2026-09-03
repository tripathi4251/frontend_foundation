let newBtn = document.createElement("button");
newBtn.innerText="click me!";
console.log(newBtn);

//let div=document.querySelector("div");
//div.append(newBtn);
//div.prepend(newBtn);
//div.after(newBtn);
//div.before(newBtn);

let p=document.querySelector("p");
p.after(newBtn);

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i> I am new.</i>";
console.log(newHeading);
    
let h=document.querySelector("div");
h.before(newHeading);
//h.after(newHeading);
//h.prepend(newHeading);

 let para=document.querySelector("p");
 para.remove();

 newHeading.remove();