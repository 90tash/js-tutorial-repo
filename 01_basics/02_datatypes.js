"use strict"; // It treats jscode as a newer version of js

//alert(3 + 3) // We are using nodejs so alert will not work here. It works in browser only.

/* console.log(3 + 3); console.log("Ashish")
We can write multiple statements in single line using semicolon(;),
But it is not a good practice.
As it reduces code readability.
*/
/*console.log(3 
    + 3)   // Same for this too. Reduce code readability.
console.log("Ashish")
*/
console.log(3 + 3)
console.log("Ashish")

let name = "Ashish"
let age = 21
let isLoggedIn =  false
let state; //undefined
let nullVar = null

console.log(typeof null)

//number => 2^53
//bigint => anything larger than 2^53
//string => ""
//boolean => true/false
//null => standalone value
//undefined => value not assigned
//symbol => unique

//object