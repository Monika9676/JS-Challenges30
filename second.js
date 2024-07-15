//Data Types

//I-Arithmetic Operators
//1.Add, Subtract, Multiply, Divide, Remainder-modulus
let a=10;
let b=20;
console.log(a+b);
console.log(b-a);
console.log(a*b);
console.log(b/a);
console.log(b%a);

//II-Assignment Operators
a+=10;
b-=10;
console.log(a,b);

//III-Comparison Operators
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a===b);

//IV Logical Operators
if(a>b && a>=b){
    console.log("And Operator")
}
if(a>b || a>=b){
    console.log("OR Operator")
}
if(a!=b){
    console.log("NOT Operator")
}

//V Ternary Operator
let num=-5;
let ans=num>0?"positive number":"Negative number";
console.log(ans);