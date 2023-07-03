/**
 * This will demostrate you various types of operator used i js
 * The various types of operators used are:
 * arithmatic operator
 * comparision operator
 * logical
 * assignment 
 * string operator
 * Increment oprator and decrement
 * unary 
 * ternary
 * Bitwise
 */
//arithmatic operators gives out the mathematical output
console.log(8+8);
console.log(8*8);
console.log(8-8);
console.log(8/8);
console.log(8%3);

//comparision operators returns value true of false
console.log(8==8);
console.log(7>8);
console.log(8<8);
console.log(8>=6);
console.log(8<=9);

//logical operator
var x = 5;
var y = 16;
console.log(x>2 && y>20 );
console.log(x>2 || y>20);

//assignement operator are used in variable assignment

let u = 100;
u += 5;
console.log(u);
u -=20 ;
console.log(u);
u *= 0.5;
console.log(u);
u/= 5;
console.log(u);
u**= 2;
console.log(u)
u%= 5;
console.log(u);

//String operators
let firstName = "Aditya";
let LastNAMe = "Tiwari"
let FullName  = firstName + LastNAMe

//increment oprator are used to increase the value of var by 1
var r = 10;
console.log(r++); //output before the increment
console.log(r);
//decrement operator
console.log(r--); //should have output as 11 since post decrement
console.log(r)


//unary oprator
var x = 20;
console.log(+x); //,ust give output as +20
console.log(-x); //must give output as -20

//ternary oprator
var z = 30;
var check = (z>15)? "True" : "False"; // this give first vale if condition is true and second value if condition is fales;
console.log(check);

//Bitwise operator
//always give result in two forms either 1 or 0
 var n1 = 5;
 var n2 = 3;
 var done = n1 & n2;
 console.log(done); //must give result as 1
console.log(n1 | n2);
console.log( n1 ^ n2);//bitwisse XOR
console.log(~n1); //biwise not
