//Dates

/*Test case 1
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);*/


/*Test Case 2
let myCreatedDate =new Date(2024,8,18)
console.log(myCreatedDate.toDateString())

let myCreatedDate2 =new Date(2024,8,18,20,15)
console.log(myCreatedDate2.toLocaleString())

let myCreatedDate3 =new Date("2024-09-18")
console.log(myCreatedDate3.toLocaleString())

let myCreatedDate4 =new Date("09-18-2024")
console.log(myCreatedDate4.toLocaleString())
*/

/*Test Case 3
let myCreatedDate =new Date("09-18-2024")
let myTimeStamp =Date.now()// abhi ki date dega
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));
*/

let newDate =new Date();
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday:"long",
})
