//DOM Manipulation

//Activity 1 -selecting and manipulating elements
let h1=document.getElementById("heading");
h1.innerHTML="New Heading"
h1.textContent="Learning"
h1.innerHTML="<i>Heading</i>"

let paras=document.getElementsByClassName("para");
paras[0].style.backgroundColor="red";

//Activity-2 -creating and appending elements
let elem=document.createElement("div");
elem.textContent="Creation of a tag";
elem.setAttribute('id',"div");
let body=document.getElementsByTagName("body")[0];
body.appendChild(elem);

let newItem=document.createElement("li");
newItem.innerText="Item 3"
let list=document.getElementById("list");
list.appendChild(newItem);


//Activity-3 Removing elements
let div=document.getElementById("div");
div.remove();

//last child
list.removeChild(list.lastChild);

//Activity-4 Modifying attributes and classes
let image=document.getElementsByTagName("img")[0];
image.setAttribute('alt',"Modifying attribute");

let changingClass=document.getElementById("para");
changingClass.classList.add('magic');
changingClass.classList.remove('para');

//Activity-5 Event Handling
let btn=document.getElementById("btn");
// btn.onclick=function(){
//     btn.textContent="Click"
// }
btn.addEventListener("click",function(){
    btn.textContent="Click  Event";
})
btn.addEventListener("mouseover",function(){
    btn.style.borderColor="Blue"
})



