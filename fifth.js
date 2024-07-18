//Learning functions

//Activity 1 -Functions
function EvenOdd(num){
    if(num%2==0){
         return "Even";
    }else{
        return "ODD";
    }
}
console.log(EvenOdd(9));

function Square(num){
    return num*num;
}
console.log(Square(8));



//Activity 2- Function Expression
const MaxOfTwo=function(num1,num2){
    return num1>num2?num1:num2;
}
console.log(MaxOfTwo(4,8));

const Concat=function(str1,str2){
    //return str1+str2;
      return str1.concat(" ",str2);
}
console.log(Concat("Monika","Girdhar"));



//Activity-3 Arrow Functions
const sum1=(num1,num2)=> num1+num2;
//OR
const sum2=(num1,num2)=>{
  return num1+num2;  
} 
console.log(sum2(10,20));

const Contain=(str,char)=>{
    //  for(let i=0;i<str.length;i++){
    //       if(str[i]==char){
    //         return true;
    //       }
    //  }
    //  return false;
    return str.includes(char);
}
console.log(Contain("Monika","m".toUpperCase()));


// Activity-4- default values
function product(num1,num2=10){
    return num1*num2;
}
console.log(product(2));

//name,age-return msg
function Person(name,age=1){
    return `Hello,${name} ,Your Age is ${age}`;
}
console.log(Person("Monika",22));


//Activity-5 //Higher Order Function
function Call(func,number){
    for(let i=0;i<number;i++) {
        func(i);
    } //calling many times  
}
function phone(number){
    console.log(`Calling number ${number}`);
}
console.log(Call(phone,8));

function HOF(func1,func2,number){
    result1=func1(number);
    result2=func2(result1)
    return result2;
}
function addOne(x){
    return x+1;
}
function addTwo(x){
    return x+2;
}
console.log(HOF(addOne,addTwo,10));


