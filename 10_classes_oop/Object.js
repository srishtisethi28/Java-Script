function mulby5(num){
    return num*5
}
mulby5.power=2
console.log(mulby5(5))
console.log(mulby5.power)
console.log(mulby5.prototype)

function createuser(username,score){
    this.username=username
    this.score=score;
}
createuser.prototype.increament=function(){
    this.score++;
}
createuser.prototype.printme=function(){
    console.log(this.score)
}
const chai=new createuser("chai",25)
const tea= new createuser("tea",250)

chai.printme()