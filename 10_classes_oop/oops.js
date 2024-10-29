const user = {
    username: "srish",
    login: 8,
    signedin: true,
    getuserdetails: function() {
        console.log(`${this.username}`);
        console.log(this);
    }
};

// Using the `User` constructor to create multiple instances
function User(username, login, isloggedin) {
    this.username = username;
    this.login = login;
    this.isloggedin = isloggedin;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    };
}

const userone = new User("hitesh", 43, true);
const usertwo = new User("srish", 12, false);

// Testing the created instances
console.log(userone);        // Logs details of userone instance
userone.greeting();          // Logs "Welcome hitesh"

console.log(usertwo);        // Logs details of usertwo instance
usertwo.greeting();          // Logs "Welcome srish"

console.log(userone.constructor)//khudike bare m reference dega
