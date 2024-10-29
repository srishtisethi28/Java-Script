class user{
    constructor(username){
        this.username=username;
    }
    logme(){
        console.log(this.username)
    }
}

class teacher extends user{
    constructor(username,email,pass)
    {
        super(username)
        this.email=email;
        this.pass=pass;
    }

    addcource(){
        console.log(`new cource add ${this.username} `)
    }
}
const chai =new teacher("chai","ch@123","123");
chai.addcource()
const tea= new user("srish")
tea.logme()
console.log(chai==tea)

console.log(chai instanceof teacher)
console.log(chai instanceof user)
console.log(teacher instanceof user)