const user ={
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username="srish"
user.welcomeMessage()

console.log(this);


// function chai()
// {
//     const username ="srish"
//     console.log(this.username);
    
// }
// chai()


const chai =()=>{
    const username ="srish"
    console.log(this);
    console.log(this.username);
    
}
chai()

// const addtwo =(num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(3,5));


// const addtwo =(num1,num2)=>num1+num2

// console.log(addtwo(3,8));

const addtwo =(num1,num2)=>(num1+num2)

console.log(addtwo(3,8));


