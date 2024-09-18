const score = 400
const balance = new Number(100)
// console.log(balance)

//Test Case 1
// console.log(balance.toString())
// console.log(balance.toString().length)

//Test case 2
// console.log(balance.toFixed(2))
const otherNumber =  23.8966
// console.log(otherNumber.toPrecision(3))
const otherNumber2 =  123.8966
// console.log(otherNumber2.toPrecision(3))
const otherNumber3 =  1123.8966
// console.log(otherNumber3.toPrecision(3))


//Test Case 3
const hundreds = 1000000
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-IN'))


// *****************MAths*****************
console.log(Math)

//Test case 1
/*
console.log(Math.abs(-4))
console.log(Math.round(4.3))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.3))
console.log(Math.pow(3,2))
console.log(Math.sqrt(25))
console.log(Math.min(42,6,9,2))
console.log(Math.max(42,6,9,2))*/

//Test case 2
console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)
const min =10
const max =20
console.log(Math.floor(Math.random()*(max-min+1))+min)