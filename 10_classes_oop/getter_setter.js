class user{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(val){
        this._password=val;
    }
}
const hitesh=new user("h@123","abc")
console.log(hitesh.password)