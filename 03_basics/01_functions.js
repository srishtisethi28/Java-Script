function sayMyName()
{
  console.log("hello");
    
}
sayMyName()//execution
sayMyName//reference

function addTwoNumbers(num1,num2)
{
    console.log(num1+num2);   
}
addTwoNumbers(2,3)
addTwoNumbers()
addTwoNumbers(3,"4")
addTwoNumbers(3,"a")
addTwoNumbers(3,null)

const result = addTwoNumbers(2,5)
console.log(result);


function addTwoNumbers(num1,num2)
{
    
  // let sum = num1+num2 
  // return sum  
  return num1 + num2
}
const sumResult = addTwoNumbers(2,6)
console.log(sumResult)


function loginUserMessage(username = "sam"){
  if(!username)
  {
    console.log("Please enter a username")
    return
  }
  return `${username} just logged in`
}

loginUserMessage("srish")//function run but nothing printed
console.log(loginUserMessage("srish"))
console.log(loginUserMessage())