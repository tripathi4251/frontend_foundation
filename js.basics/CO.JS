/* class student {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
       let student1= new student("akshat",21);
   console.log(student1.name);
*/
class student  {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce() {

        console.log("my name is" + " " + this.name);
}
}

let student1 = new student("akshat" , 21);
student1.introduce();
console.log(student1.age);

class Toyotacar {
    constructor(brand,mileage){
        this.brand=brand;
        this.mileage=mileage;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
}

let fortuner=new Toyotacar("fortuner",10);
let lexus=new Toyotacar("lexus",12);
lexus.start();