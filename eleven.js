//Promise and Async
//Activity-1 + 2  //Promise--resolve and reject ,chaining
function doSomething(i){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Data ${i}`)
            reject("your promise was rejected")
        },
        1000)
    })
}
//CALLBACK HELL
// doSomething(
//     1,(result1)=>
//     {console.log(result1);
//         doSomething(
//             2,(result)=>{console.log(result)}
//         )
//     }
// )
doSomething(1)
.then((result)=>{
    console.log(result);
    return doSomething(2)
})
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
   console.log(err);
})

//Activity-3 Async and await
let h1=document.getElementsByTagName("h1")[0];
function changingColor(color,delay){
   return new Promise((resolve,reject)=>{
          setTimeout(()=>{
             h1.style.color=color  
            //    resolve();
            reject("rejection") 
          },delay)
   })
}
async function demo(){
    try{
       await changingColor("red",1000);
       await changingColor("blue",1000);
       await changingColor("green",1000); 
    }
      catch(err){
           console.log(err);
      }
}
demo(); //automatically return
console.log("BEFORE LOADING ")

//Activity-4 fetch from api
//then and catch
function fetchData(url){
        fetch(url, {
            headers: {
                'Accept': 'application/json' 
            }}).then((response)=>{
                if(!response.ok){
                    throw new Error("Not ok")
                 }
                 return response.json();
            }).then((data)=>{
                  console.log(data.joke);
            }).catch((err)=>{
                throw err;
            })  
}
//async and await
async function fetchData(url){
    try{
        let response=await fetch(url, {
            headers: {
                'Accept': 'application/json' 
            }});
        if(!response.ok){
           throw new Error("Not ok")
        }
        const data=await response.json();
        console.log(data.joke);
    }
    catch(err){
        throw err;
    }
}
fetchData("https://icanhazdadjoke.com");

