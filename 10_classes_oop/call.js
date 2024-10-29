function setusername(username){
    this.username=username;
}

function createuser(username,email,password){
    setusername.call(this,username)//ye actually call ni hora to use call
    this.email=email;
    this.password=password;

}
const chai =new createuser("chai","chai@123","123")
console.log(chai)