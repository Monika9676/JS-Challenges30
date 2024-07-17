//Loops
console.log("Activity 1");
//Activity-1 for loop
for(let i=0;i<10;i++){
    console.log(i+1);
}
//table of 5
for(let i=1;i<=10;i++){
    console.log(5*i);
}

//Activity-2 while loop
console.log("Activity 2");
let i=1,sum=0;
while(i<=10){
    sum+=i;
    i++;
}
console.log(sum);

//10 to 1
let number=10;
while(number>0){
    console.log(number);
    number--;
}
//Activity-3 Do-while loop
console.log("Activity 3");
let num=1;
do{
   console.log(num);
   num++;
}while(num<=5)

//factorial
let fact=1;
let x=10;
do{
    fact*=x
    x--;
}while(x>0)
console.log("factorial",fact);

//Activity-4 nested loop
console.log("Activity 4")
let n=5;
for(let i=1;i<=n;i++){
    let stars='';
    for(let j=1;j<=i;j++){
         stars+='*'
    }
    console.log(stars);
}

//Activity-5 Continue & break statement
console.log("Activity 5");
for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}
for(let i=1;i<=10;i++){
    if(i==7){
        break;
    }
    console.log(i);
}
