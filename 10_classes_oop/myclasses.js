class user{
    constructor(username,email,pass){
        this.username=username;
        this.email=email;
        this.pass=pass;
    }
    encryptpass(){
        return `${this.pass}`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai=new user("chai","chai@gmail","123")
console.log(chai.encryptpass())
console.log(chai.changeusername())

//BTS
function User(username,email,pass){
    this.username=username;
    this.email=email;
    this.pass=pass;
}
User.prototype.encryptpass=function(){
    return `${this.pass}`
}
const tea=new User("chai","chai@gmail","123")
console.log(tea.encryptpass())