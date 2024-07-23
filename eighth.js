//features if js--ECMAScript 6

//Activity1-Template literals
const pName="Monika";
const pAge=22;
const greeting=`Hey I am ${pName} and I am ${pAge} years old`;
console.log(greeting);

//Multiline string literal
const greet=`hello
             i am here ${pName}`
console.log(greet);

//Activity-2 Destructuring
//Arrays
const nums=[1,2,3,4,5];
const [num1,num2]=nums;
console.log(num1,num2);
//Objects
const book={
    title:"The art",
    author:"Monika"
}
const {title:myTitle,author:MyAuthor}=book;
console.log(myTitle,MyAuthor);

//Activity-3 Spread and rest operator
//Spread--expand into individuals
//object
const library={
    ...book,
    lName:"Ku Library",
    location:"Kuk"
}
console.log(library);
//array
const newNums=[...nums,9,10];
console.log(newNums);

//Rest--collect into one array
function sumUp(...numbers){  //numbers is a array here now
    return numbers.reduce((acc,num)=>num+acc,0)
}
console.log(sumUp(1,2,3));
console.log(sumUp(1,2,3,8));
console.log(sumUp()) //0

//Activity-4--default parameter
function product(num1,num2=1){
    return num1*num2;
}
console.log(product(5));
console.log(product(5,3));

//Activity-5--Enhanced Object Literals
const key="email";
const fName="Monika";
const lName="Girdhar";
const age=22;
const Person={
     fName,
     lName,
     age,
     [key]:"monikagirdhar9676@gmai.com",
     greet(){
        console.log("Hello without function keyword");
     },
     get fullName(){
        return `${this.fName} ${this.lName}`;
     },
     set fullName(name){
        [this.fName,this.lName]=name.split(" ");
     }
}
Person.greet();
console.log(Person.fullName); //getter
Person.fullName="Arsh Bajaj"; //setter
console.log(Person.fName);
console.log(Person.lName);

