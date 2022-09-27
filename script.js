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
//// !! FROM HERE UNDO THE //

// let a1= 1;
// let b1 = 1;

// a1
// ++
// b1

// console.log(`a= ${a1}\nb = ${b1}`);

// let c1 = 1;
// let d1 = 1;

// c++; d;
// console.log(`a= ${c1}\nd = ${d1}`);

//ITERATION

//LOops

//FOR 
//uses counter 
//runs while a condition is met
// !! FROM HERE UNDO THE //
// for (let i = 0; i < 3; i++){
//     console.log(`i = ${i}`);
// }

//WHILE
//WORKS WITH BOOLEANS 
//RUN UNTIL A CONDITION IS NO LONGER TRUE 

// let condition = true;
// let increment = 0;
// while(condition === true) {
//     console.log(`increment = ${increment}`);

//     if(increment === 3) {
//         condition = false
//     }
// }

// DO WHILE 
//LIKE WHILE LOOP 
//BUT IT WILL ALWAYS RUN AT LEAST ONCE 
// !! FROM HERE UNDO THE //
// let aa = false;
// do{
//     console.log("run forest run");
// } while (aa === true);

//SWITCH CASES
//RUN UNTIL A BREAK OR RETURN 
//CAN BE MORE EFFECTIVE THAN LARGE 'IF ELSE IF' STATEMENT 
// !! FROM HERE UNDO THE //
// let num = 1
// switch(num) {
//     case 0:
//         console.log("number is zero");
//         break;
//     case 1:
//         console.log("we are number one");
//     case 4:
//         console.log("we are at 4");
//     case 10:
//         console.log("we made it to ten")
//         break;
//     default:
//         console.warn("not here");
// }


// QA COMMUNITY ITERATION EXERCISE
// RECREATE THIS FLOW CHART AS LOOP
// !! FROM HERE UNDO THE //
// let aaa= 100
// while(aaa >= 200){
//     console.log("A");
//     aaa++;
// }
// for (let aaa = 100; aaa > 200; aaa++){
//     console.log("A")
// }

// create a method that can print out the numbers 1- 10 ten times each 

let m = 100;
while (m <=200) {
    is (a % 2 == 0) {
        console.log("-");
    } else {
        console.log("*");
    }
    m++;
}