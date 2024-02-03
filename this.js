//this  => to access property inside object

let fName = "Naresh"
let lName = "Kumar"

let sayHi = {
    firstName: "Jeya",
    lastName: "Prakash",
    bye: {
        firstName: "venkat",
        lastName: "Hari"
    },
    welcome: function () {
        console.log(`Say hi to ${this.bye.firstName} ${this.bye.lastName}`)
    }
}

console.log(sayHi.welcome())