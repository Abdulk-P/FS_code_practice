// this is not just prototype its constructor and followed by classes Code 


//this is using Construcor Function and ProtoType for Method

function Sam(x,y){
    this.name = x;
    this.age = y
}

Sam.prototype.greet = function(){
    console.log("this is the Greet function with prototype");
}

let p1 = new Sam("ABDUL", 23);
// p1.greet();
console.log(p1);



//using Classes and Constructor of Classes 

class Sam2{
    constructor(x,y){
        this.name = x;
        this.age = y;
    }

    greet(){
        console.log(`My name is ${this.name} and I'm ${this.age} years old`);
    }
}

let p2 = new Sam2("Abdul", 23);
console.log(p2)


//--Inheritance--> it inherit the parents class property and methods using extends keyword

class SonOfSam extends Sam{
    constructor(x, y, z){
        super(x,y); //calling the Parent Constructor
        this.rollno = z;
    }
}

let p3 = new SonOfSam("abdul", 23, 400);
console.log(p3);


let n = 1230;
console.log(n%10);