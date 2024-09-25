//Objects using constructor

/* Test case 1
const tinderUser = new Object();// singleton object
// condst tinderUser ={} //non singleton object

tinderUser.id="123abc"
tinderUser.name = "Srish"
tinderUser.isLoggedIn = false
console.log(tinderUser)
*/

/* Test case 2
//Object Nesting
const regularUser = {
    email: "some@gmail.com",
    fullName:{
        userFullName:{
            firstName: "Srish",
            lastName:'Sethi'
        }
    }
}

console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName.lastName);
*/


/*Test Case 3 : Object Combining
const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

// const obj3 ={ obj1, obj2}
// console.log(obj3);

// const obj3 = obj1 +obj2
// console.log(obj3);

// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3);
// console.log(obj1);


// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);
// console.log(obj1);

// const obj3= {...obj1, ...obj2}
// console.log(obj3);
*/

/*Test case 4: Objects inside array
//Objects in array used in database
const users =[
    {
        email:"h@gmail.com"
    },
    {
        email:"h@gmail.com"
    },
    {
        email:"h@gmail.com"
    }
    
]
console.log(users[1].email);
*/

const tinderUser ={} //non singleton object

tinderUser.id="123abc"
tinderUser.name = "Srish"
tinderUser.isLoggedIn = false
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));









