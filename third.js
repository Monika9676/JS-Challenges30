//Control Structure

//Activity1- if else statement
let num=0;
if(num>0){
   console.log("Positive number");
}else if(num<0){
    console.log("Negative number");
}else{
    console.log("Zero");
}

let age=22;
if(age>=18){
    console.log("Eligible to Vote")
}else{
    console.log("Not Eligible to Vote");
}

//Activity2- Nested if else
let a=10,b=20,c=15;
if(a>b){
    if(a>c){
        console.log("a is largest");
    }else{
        console.log("c is largest");
    }
}else{
    if(b>c){
        console.log("b is largest");
    }else{
        console.log("c is largest");
    }
}

//Activity-3 switch statement
let day=2;
switch(day){
    case 1:console.log("Sunday");
           break;
    case 2:console.log("Monday");
           break;
    case 3:console.log("Tuesday");
           break;
    case 4:console.log("Wednesday");
           break;
    case 5:console.log("Thursday");
           break;
    case 6:console.log("Friday");
           break;
    case 7:console.log("Saturday");
           break;
}

let score=90;
switch(true){  //it behave like consition in switch   true/false=if/else
    case score>90:console.log("A");
           break;
    case score>80:console.log("B");
           break;
    case score>70:console.log("C");
           break;
    case score>60:console.log("D");
           break;
    case score>50:console.log("E");
           break;
}

//Activity-3 Ternary Operator
let number=4;
let ans=number%2==0?"even":"odd";
console.log(ans);

//Activity-3 Combining Conditions
let year=2000;
if(year%4==0){
     if(year%100==0){
        if(year%400==0){
            console.log("Is a leap year")
        }else{
          console.log("Not a leap year");
        }
     }else{
          console.log("Is a leap year")
     }
}else{
    console.log("Not a leap year");
}

//combination
if((year%4==0 && year%100!=0)||year%400==0){
    console.log("Is a leap year");
}else{
    console.log("Not a leap year")
}
