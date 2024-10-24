const coding =['js','python','ruby','cpp'];


//For each loop most used in array as it is in its property in prototype

// coding.forEach( function (item){
//     console.log(item)
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme);

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })



const mycoding=[
    {
        languagename:"java",
        languagefilename:'j'
    },
    {
        languagename:"python",
        languagefilename:"py"
    }
]

mycoding.forEach((item)=>{
console.log(item.languagename);
console.log(item.languagefilename)
})
