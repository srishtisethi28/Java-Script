/*// Primitive

 7 types : String ,Number, Boolean, null, undefined, Symbol, BigInt
*/

const score = 100
const marks = 100.5
const isLoggedIn = false
const temp = null
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

const bigNumber=258412336n


//Js is Dynamically typed

/*//Reference (Non Primitive)

// Array, Objects, Functions
*/

const heros =[ "shaktiman", "doga", "naagraj"];

let myobj ={
    name: "srish",
    age: 19,
};

const myfunction =function()
{
    console.log("srish");
    
}