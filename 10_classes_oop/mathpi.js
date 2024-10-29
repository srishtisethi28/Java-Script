const discriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(discriptor)
console.log(Math.PI)
Math.PI=8;
console.log(Math.PI)//u can't change it

const chai={
    name:'ginger',
    price:250,
    available:true,
    orderchai:function(){
        console.log('no')
    }
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"))
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (const [key,val] of Object.entries(chai)) {
    if(typeof val!='function')
    console.log(`${key}:${val}`)
}