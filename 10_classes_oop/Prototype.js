// let myname="srish    "
// console.log(myname.trim().length)

let myheros=['thor','spoiderman']

let heropower={
    thor:'hammer',
    spiderman:"sling",
    getspiderpower:function(){
        console.log(this.spiderman)
    }
}

Object.prototype.hitesh=function(){
    console.log('hitesh is present in all')
}
heropower.hitesh()
myheros.hitesh()


//inheitence
const user={
    name:"chai",
    email:"chai@gmail"
}

const teacher={
    makeved:true
}

const teachingsupport={
    isavailable:false
}

const TAsupport={
    makeassignment:'js',
    fulltime:true,
    __proto__:teachingsupport //prototypal inheritence
}
teacher.__proto__=user //prototypal inheritence properties share krege

//new approach
Object.setPrototypeOf(teachingsupport,teacher)

//
let anotheruser="srish    "
String.prototype.truelngth=function(){
    console.log(this.trim().length)
}
anotheruser.truelength()