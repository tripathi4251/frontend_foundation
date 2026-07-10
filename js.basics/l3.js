// print all even nuumbers from 0 to 100
/*
for (let num=0; num<=100; num++){
    if (num%2===0) {
        console.log("num = ",num);
    }
}
    */

//print all odd numbers from 0 to 100
/*
for (let num=0; num<=100; num++) {
if (num%2!==0){
    console.log("num = ",num);
}
}
*/

let gamenum= 25;
let usernum = prompt("guess the game number:");
while (usernum!=gamenum){
    usernum=prompt("you entered wrong number, guess again:");
}

console.log ("congratulations, you entered the right number");