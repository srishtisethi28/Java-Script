// const coding= ['js','ruby','cpp','python']
// const value= coding.forEach((item)=>{
//     return item;
// })
// console.log(value)

const mynums=[1,2,3,4,5,6,7,8,9,10];

// const newnums= mynums.filter( (num)=> num>4)
// console.log(newnums)

// const newnums=mynums.filter((num)=>{
//     return num>4;
// })
// console.log(newnums);

// const newnums=[]
// mynums.forEach((num)=>{
//     if(num>4)
//     {
//         newnums.push(num)
//     }
// })
// console.log(newnums);

const books=[
    {title:'one',genre:'fiction',publish:1981,edition:2001},
    {title:'two',genre:'science',publish:1951,edition:2002},
    {title:'three',genre:'history',publish:1961,edition:2003},
    {title:'four',genre:'fiction',publish:1971,edition:2014},
    {title:'five',genre:'non fiction',publish:1991,edition:2005}
]
let userbooks=books.filter((bk)=>bk.genre==='history')
console.log(userbooks)

 userbooks=books.filter((bk)=>bk.publish>1970)
 console.log(userbooks)
