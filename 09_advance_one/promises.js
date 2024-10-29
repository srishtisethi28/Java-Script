const promise1= new Promise(function(resolve,reject){
    //do an async task
    //DB calls,cryptography, network
    setTimeout(() => {
        console.log('complete')
        resolve()
    }, 1000);
})

//consume
//resolve ka connection h .then se
promise1.then(function(){//ye function automatic argument recieve krta h jo b promise m kam hua h
    console.log("promise consume")
})


new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('Async task 2')
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved")
})

const promise3= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@eg.com"})
    },1000)
})
promise3.then(function(user){
    console.log(user)
})

const promise4= new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error =false;
        if(!error){
            resolve({username:"srish",password:"123"})
        }
        else{
            reject('Error something went wrong')
        }
    },1000)
})
promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("promise is resolved or rejected")
})

const promise5=  new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error =true;
        if(!error){
            resolve({username:"js",password:"123"})
        }
        else{
            reject('js went wrong')
        }
    },1000)
})

async function comnsume5(){
    try{
        const res=await promise5
        console.log(res)

    }catch(error)
    {
        console.log(error);
    }
}
comnsume5()

// async function getallusers(){
//     try{
//         const res= await fetch('https://api.github.com/users/hiteshchoudhary')
//     const data=await res.json()
//     console.log(data)
//     }catch(e){
//         console.log(e)
//     }
// }
// getallusers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})