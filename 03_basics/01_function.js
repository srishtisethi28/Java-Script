// function sayMyName()
// {
//   console.log("hello");
    
// }
// sayMyName()//execution
// sayMyName//reference

// function addTwoNumbers(num1,num2)
// {
//     console.log(num1+num2);   
// }
// addTwoNumbers(2,3)
// addTwoNumbers()
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)

// const result = addTwoNumbers(2,5)
// console.log(result);


// function addTwoNumbers(num1,num2)
// {
    
//   // let sum = num1+num2 
//   // return sum  
//   return num1 + num2
// }
// const sumResult = addTwoNumbers(2,6)
// console.log(sumResult)


// function loginUserMessage(username = "sam"){
//   if(!username)
//   {
//     console.log("Please enter a username")
//     return
//   }
//   return `${username} just logged in`
// }

// loginUserMessage("srish")//function run but nothing printed
// console.log(loginUserMessage("srish"))
// console.log(loginUserMessage())
//


// function calculateCartPrice(num1)
// {
//   return num1
// }
// console.log(calculateCartPrice(20))
// console.log(calculateCartPrice(200,400,500));


// function calculateCartPrice(...num1)
// {
//   return num1
// }
// console.log(calculateCartPrice(20))
// console.log(calculateCartPrice(200,400,500));

// function calculateCartPrice(val1,val2, ...num1)
// {
//   return num1
// }

// console.log(calculateCartPrice(200,400,500,600));


//********function with object**********

//Case 1
// const user ={
//   username : "Srish",
//   price: 566
// }

// function handleObject(anyobject)
// {
//   console.log(` username is ${anyobject.username} and price is ${anyobject.price}`)
// }
// handleObject(user)


//Test case 2
// function handleObject(anyobject)
// {
//   console.log(` username is ${anyobject.username} and price is ${anyobject.price}`)
// }
// handleObject({
//   username:"sam",
//   price:399
// })


//***********Function with array*************
const myarray =[10,20,30,40]
function getsecvalue(array)
{
  return array[1]
}
console.log(getsecvalue(myarray));
console.log(getsecvalue([200,300,400]))
