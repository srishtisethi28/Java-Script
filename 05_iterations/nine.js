//Reduce

const mynums=[1,2,3];

const mytotal=mynums.reduce((acc,currval)=>{
    console.log(acc,currval)
    return acc+currval
},0//initial val to be assined to accumulator
)
console.log(mytotal)

const shoppingcart=[
    {
        itemname:"js",
        price:999
    },
    {
        itemname:'datascience',
        price:12000
    },
    {
        itemname:"python",
        price:3000
    }

]

// const total=shoppingcart.reduce((acc,item)=>acc+item.price,0)
// console.log(total)

const total=shoppingcart.reduce(function(acc,item){
    return acc+item.price
},0)
console.log(total)