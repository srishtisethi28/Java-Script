function user(email,password){
    this._email=email;
    this._password=password

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase();
        },
        set:function(value){
            this._email=value
        }
    })
}
const chai=new user("h@1233","123");
console.log(chai.email)


