//Arrays 

//Activity-1  Creation and access
let nums=[1,2,3,4,5];
console.log(nums);
console.log(nums[0]);
console.log(nums[nums.length-1]);

//Array Methods

//Activity-2 (basics)
nums.push(6); //1 2 3 4 5 6
nums.pop();   //1 2 3 4 5
nums.shift();  //2 3 4 5
nums.unshift(7); //7 2 3 4 5
console.log(nums);

//Activity-3  (intermediate)
let DoubleNums=nums.map((num)=>num*2);
let EvenNums=nums.filter((num)=>num%2==0)
let Sum=nums.reduce((num,sum)=>num+sum)
console.log(DoubleNums,EvenNums,Sum);

//Activity-4 Array Iteration
for(let i=0;i<nums.length;i++){
    console.log(nums[i]);
}
nums.forEach((num)=>{
     console.log(num*2);
})

//Multidimensional array
let matrix=[[1,2],[1,2,3],[1,2,3,4]];
console.log(matrix[0][1]); //2
matrix.push([2,5,6]);
console.log(matrix);

