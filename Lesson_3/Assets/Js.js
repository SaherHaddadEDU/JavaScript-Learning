"use strict";
// True or False

// Task 1
// the alert will be Hello, because the condition checks if the string contains a value, which it does, so its true.

// Task 2
// let answer = prompt("What is the offical name of JavaScript?")
// if(answer === "ECMAScript")
//   alert("Correct!");
// else
//   alert("You dont know? its ECMAScript!");

// Task 3
// let score = 75;
// let grade = score >= 90 ? `A` :
//             score >= 80 ? `B` :
//             score >= 70 ? `C` :
//             score >= 60 ? `D` : `F`

// console.log("Grade is: ", grade);

// Task 4
// let num = prompt("Enter a number")
// if(num > 0)
//   alert(`1`)
// else if(num < 0)
// alert(`-1`)
// else
// alert(`0`)

// Task 5
// let result = a+b < 4 ? `Not enough` : `A lot`;

// Task 6
// let message = login == `Employee` ? `Hello` : login == `Director` ? `Hello` : login == `` ? `No login` : ``;

// Task 7
// console.log( false | | 'sdf' ); // true
// console.log( false && '' ); // false
// console.log( true | | '' ); // true
// console.log( true && '' ); // false
// console.log( undefined | | null ); // true
// console.log( undefined | | 0 | | null ); // true
// console.log( undefined && 0 && null ); // false
// console.log( 1 | | 0 ); // true
// console.log( null | | 1 ); // true
// console.log( null || 0 | | 1 ); // true

// Switch
// Task 1
// let infoArray = [
//   "יום ראשון - חזרה לשגרה",
//   "יום שני - ישיבת צוות",
//   "יום שלישי - עבודה על פרויקט",
//   "יום רביעי - ספורט בערב",
//   "יום חמישי - סיום משימות",
//   "יום שישי - קניות לשבת",
//   "שבת - מנוחה"
// ];

// let answer = prompt(`Enter number of day:`)
// switch(answer.toUpperCase()){
//   case '1':
//   case `SUNDAY`:
//      alert(infoArray[0]);
//      break;
//   case '2':
//   case `MONDAY`:
//     alert(infoArray[1]);
//   break;
//   case '3':
//   case `TUESDAY`:
//     alert(infoArray[2]);
//     break;
//   case '4':
//   case `WEDNSDAY`:
//     alert(infoArray[3]);
//     break;
//   case '5':
//   case `THURSDAY`:
//     alert(infoArray[4]);
//     break;
//   case '6':
//   case `FRIDAY`:
//     alert(infoArray[5]);
//     break;
//   case '7':
//   case `SATURDAY`:
//     alert(infoArray[6]);
//     break;
//   default:
//     alert(`Invalid Value!`)
// }

// Loops
// Task 1 While
// let i = 100;
// let sum = 0;
// while(i)
//   sum += i--;
// console.log(sum);

// Task 2 Do-While
// let num;
// do{
//   num = prompt(`Enter a Number`);
// }while(isNaN(num) || num <= 0)
// alert(`Your number is ${num}`);

// Task 3 For
// let num = 7;
// for(let i = 1; i <= 10; i++)
//   console.log(`${num} * ${i} = ` + num * i);
  
// Task 4 Break
// const secret = 7
// while(true){
//   let num = prompt(`Enter a number (1-10)`)
//   if(num == secret){
//     alert(`Right`);
//     break;
//   }
// }

// Task 5 Continue
// for(let i = 1; i <= 30; i++){
//   if(i % 3 == 0)
//     continue
//   console.log(i)
// }

// Task 6
// let i = 3;
// while (i) {
//   alert( i-- );
// } // Last value will be 1 because the loop will stop when i = 0 

// Task 7
// No, the left one will increment the i before check condition and the right one will increment after.

// Task 8
// Yes, in the for loop, the i will be incremented after the block has been ran.

// Task 9
// for(let i = 2; i <=10; i++){
//   if(i % 2 != 0)
//     continue;
//   alert(i)
// }

// Task 10
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
// let i = 0
// while(i < 3){
//   alert(`Number ${i}!`)
//   i++;
// }