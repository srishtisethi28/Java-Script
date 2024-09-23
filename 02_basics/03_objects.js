// Singleton - Build by construct5ors and not by literals


// Object literals
// Object- keys and values

const mySym = Symbol("key1")

const JsUser = {
    name: "Srish",
    "full name": "Srishti Sethi",
    //mySym: "mykey1",
    [mySym]: "mykey1",
    age: 19,
    location: "Una",
    email:  "srish@gmail.com",
    isLoggedIn: false,
    lastLggedInDays: ["Monday", "Saturday"]
}
/* Test Case 1: Accesing an object
//Method 1
console.log(JsUser.email);

// console.log(JsUser[email]); //error: it does not define the datatype of email

//Method 2
console.log(JsUser["email"]);

//console.log(JsUser.full name); //error can't access like this use method 2
console.log(JsUser["full name"]);
*/




/* Test Case 2: Using symbols in object
//Using Symbol with input in object as mySym: "mykey1"
// console.log(JsUser.mySym); // it is not siving error but also considering as a normalstring like in other keys it is not using it as a symbol
// console.log(typeof JsUser.mySym)

//Using Symbol with input in object as [mySym]: "mykey1"
console.log(JsUser.mySym);//it cant be accessed like this it will give undefined 
console.log(JsUser[mySym]);
*/



/* Test Case 3: Modifying Objects
JsUser.email ="srish@chatgpt.com"
Object.freeze(JsUser)
JsUser.email ="srish@microsoft.com" //after freezing the object no changes will be applied but it will not give an error also
console.log(JsUser);
*/



JsUser.greeting = function(){
    console.log("Hello JS User");
}

console.log(JsUser.greeting);//Function(Anonymous)
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hwello ${this.name}`);
    
}
console.log(JsUser.greeting2());







