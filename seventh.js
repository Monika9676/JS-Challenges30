//Objects Literals And Singleton 
//Singleton- const user=new Object()
//user.id=mjk                            //ensure only one instance

//Activity 1
const sym=Symbol("key1");
let book={
    title:"The Art",
    author:"Dr. Monika",
    year:2020,
    [sym]:"key2" //how to declare symbols in objects ?
}
console.log(book);
console.log(book["title"],book.author);
console.log(book[sym]);



//Activity-2  Object Methods
book.bookProperty=function(){
     return `The title is ${this.title} and the author is ${this.author}`
}
console.log(book.bookProperty());

book.changeYear=function(year){
      this.year=year;
}
book.changeYear(1998)
console.log(book);
// Object.freeze(book);  //can't change value now


//Activity-3  Nested Objects
const library={
    name:"Kurukshetra Library",
    books:["Maths","English","Computer"]
}
console.log(library.name);
const arr=library.books
arr.forEach((book)=>{
    console.log(book)
})

//Activity-4 this keyword  (arrow function does not have this function)
book.greeting=function(){
    return `${this.title} And ${this.author}`;
}
console.log(book.greeting());


//Activity-5 
for(one in book){
      console.log(one);   
      console.log(book[one]);  //bcoz one is variable here not obj literal so, book.one is wrong
}
console.log(Object.keys(library));
console.log(Object.values(library));
console.log(Object.entries(library));
console.log(library.hasOwnProperty("isLoggedIn"));


//Extra
//Object Assign -concat object
const obj3={book,library};  //nested object
const obj4=Object.assign({},book,library);  //concat
//OR SPREAD
const obj5={...book,...library};
// console.log(obj3);
// console.log(obj4);
console.log(obj5);

//Array of Object
let n=[
    {},{}
]
n[0].title;

//Destructuring
console.log("Destructuring")
const {name:libName}=library;
console.log(libName);

const {books}=library;
console.log(books);


//JSON -object like but no name
// {
//     "title":"The Art",
//     "author":"Dr. Monika",
//     "year":"2020"
// }
//JSON.parse(api) //json to js
//JSON.stringify(json) //js to json string





