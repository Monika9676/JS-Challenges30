//Event Handling

//Activity 1 clicl event
btn=document.querySelector("#btn");
btn.addEventListener("click",()=>{
   para=document.getElementById("para");
   para.innerText="Chnaging text"; 
});

img=document.getElementById("img");
img.addEventListener("dblclick",()=>{
    alert("btn clicked");
    img.style.display="none";
});
//Activity -2 Mouse Event
para.addEventListener("mouseover",()=>{
    para.style.backgroundColor="red"
})
para.addEventListener("mouseout",()=>{
    para.style.backgroundColor=""
})

//Activity-3 key Events
input=document.getElementsByTagName("input")[0];
input.addEventListener("keydown",(event)=>{
    console.log(`Key Pressed is :${event.key}`);
})

input.addEventListener("keyup",(event)=>{
    console.log(`current Value is : ${event.target.value}`);
})

//Activity-4 submit and change event of form
form=document.getElementById("myForm")
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const formData=new FormData(form);
    formData.forEach((value,key)=>{
        console.log(`${key}:${value}`)
    })
})
dropdown=document.getElementById("dropdown")
dropdown.addEventListener('change',()=>{
    const selectedText=dropdown.options[dropdown.selectedIndex].text;
    para.innerText=selectedText;
})

//Activity-5 Event Delegation--event to their parent instead of individual child
ul=document.getElementById("ul");
ul.addEventListener("click",(event)=>{
    if(event.target.tagName=="LI"){
        console.log(event.target.innerText);
    }
})
add=document.getElementById("add");
add.addEventListener("click",()=>{
    const li=document.createElement("li");
    li.innerText=`Item ${ul.children.length+1}`
    ul.append(li);
})








