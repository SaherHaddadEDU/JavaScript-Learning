"use strict";
// Data Types
// Task 1
// let str1 = 'xxx';
// let str2 = 'yyy';
// // let txt  = `aaa ${str1} bbb ${str2} ccc`;
// console.log(txt);

// Task 2
// let age = prompt('how old are you?');
// alert(`You are ${age} years old!`);

// Task 3
// let product = {
//   id: 123,
//   name: "Salt",
//   description: "Miniral that goes well with food",
//   price: 0.99,
//   manufacturer: "Sea Water inc."
// };
// console.log(product);
// product.category = "Seasoning";
// product.price = 1.99;
// delete product.description;
// console.log(product);

// Task 4
// const flag = true;
// const str = "true";
// const num = 123;
// const txt = "Hello"
// console.log(typeof flag);
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof txt);

// Task 5
// console.log(one); // Undfiend
// const one = 1; 
// const one = 2; 
// console.log(one); // one = 2
// var --> let = not allowed.
// var --> const = not allowed.

// Task 6
// const name;
// name = "Tania";
// console.log( name );
// not allowed because const name is not initalized when declered.

// Task 7
// const num = 100;
// num += 100;
// console.log( num ); //200
// Resolved code
// let num = 100
// num += 100
// console.log(num);

// Task 8
// for(var i = 1; i <= 3; i++);
// console.log( i );
// // 4
// for(let j = 1; j <= 3; j++);
// console.log( j );
// variable j is undfiend outside the for loop.

// Type Conversion

// Task 1
// let value = true;
// console.log(typeof value); // Boolean

// value = String(value);
// console.log(typeof value); // String
// console.log(value); //"true"

// console.log( "6" * "2" ); // 12
// console.log( "6" - "2" ); // 4

// let str = "123";
// console.log(typeof str); // String

// let num = Number(str); // Number
// console.log(typeof num); // 123
// console.log(num); // 123

// let age = Number("asd");
// console.log(age); // NaN

// console.log( Number("123 ") ); // 123
// console.log( Number("123z") ); // Nan
// console.log( Number(true) ); // 1
// console.log( Number(false) ); // 0
// console.log( Boolean(1) ); // true
// console.log( Boolean(0) ); // false
// console.log( Boolean("Hi!") ); // true
// console.log( Boolean("") ); // false
// console.log( Boolean("0") ); // true
// console.log( Boolean(" ") ); // true

// Task 2
// console.log(true + 3); // 4
// console.log(true + true); // 2
// console.log(true - true); // 0
// console.log(true + false); // 1
// console.log('1' + true); // 1true
// console.log( String(true) +1 ); // true1
// console.log( String(true) + Number(true) ); // true1

// console.log(Boolean(0)); // false
// console.log(Boolean(-1)); // true
// console.log(Boolean(-0)); // false
// console.log(Boolean(+0)); // false
// console.log(Boolean('abc')); // true
// console.log(Boolean('')); // false
// console.log(Boolean('0')); // true
// console.log(Boolean(true)); // true
// console.log(Boolean(false)); // false
// console.log(Boolean('true')); // true
// console.log(Boolean('false')); // true
// console.log(Boolean(3)); // true
// console.log(Boolean(1/0)); // true
// console.log(Boolean('null')); // true
// console.log(Boolean(undefined)); // false
// console.log(Boolean('undefined')); // true
// console.log(Boolean(NaN)); // false
// console.log(Boolean('NaN')); // true
// console.log(Boolean(3 * 'abc')); // false
// console.log(Boolean(Infinity)); // true

// Task 3
let number = 12345;
console.log(String(number).length);