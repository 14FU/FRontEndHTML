'use strict'
// task one 
//console.log(); will create a string text with all 
console.log("Thanks Thom");

console.log("First Name");
console.log("Second Name");
console.log("Where are you from");
console.log("And your star sign");

let make= "Mercedes Benz"
let model= "C class"
console.log("my favourite car is ",make,"and the model is",model);
// add %c and anything after the %c will be edited to the format you has specified
console.log("This is now %c the end of the exercises","color:crimson;font-family: fantasy;font-style:bold;background color:black;padding: 10px");
//task 2 part 1
let a; // will come back null
let b ="12345"; // string 
let c = 12345; // number 
let d = true; // boolean 
let e = {a:"javascriptyy"}; // object 
//use console.log() to display the info you have just made 
console.log(a,b,c,d,e);
// task two part 1 
let totalMoney= 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = totalMoney - moneyPaidSoFar;
console.log(totalMoney, totalLeftToPay);


//ASCI- automatic semicolon insersation

let a1= 1;
let b1 = 1;

a1
++
b1

console.log(`a= ${a1}\nb = ${b1}`);

let c1 = 1;
let d1 = 1;

c++; d;
console.log(`a= ${c1}\nd = ${d1}`);

//ITERATION

//LOops

//FOR 
//uses counter 
//runs while a condition is met
for (let i = 0; i < 3; i++){
    console.log(`i = ${i}`);
}

//WHILE
//WORKS WITH BOOLEANS 
//RUN UNTIL A CONDITION IS NO LONGER TRUE 

let condition 