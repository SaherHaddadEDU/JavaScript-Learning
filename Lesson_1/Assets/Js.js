"use strict";

document.write("Saher Haddad");
console.log("Saher Haddad");
const myArray = ["Robert", "Ronaldo", "Dan"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

// With for loop:
for(let i = 0; i < myArray.length; i++){
  console.log(myArray[i]);
}

// Single line comment
/* Multi line
Comment */

alert("Hello World!");

const text = "Your name";
let userName = prompt('What is your name?', text);

alert(`Your name is: ${userName}`);
console.log(userName);

let isRemove = confirm("Do you want to delete an item?");

alert( isRemove ); // true if OK is pressed

console.log(isRemove);

let name, admin
name = "John"
admin = name;
console.log(admin)