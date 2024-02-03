//class => blueprint of an object 

class House {
    constructor() {
        this.type = "3bhk",
            this.color = "green"
    }
}

//create object
const h1 = new House()
console.log(h1)

const h2 = new House()
console.log(h2)


class House1 {
    constructor(type, color) {
        this.type = type,
            this.color = color
    }
}


const h3 = new House1("4bhk", "skyblue")
console.log(h3)




class Car {
    constructor(carname, speedlimit) {
        this.carname = carname
        this.speedlimit = speedlimit
        this.welcomeMsg = this.welcome()
    }
    //defining method

    welcome() {
        console.log(`Hey my car name is ${this.carname} and its speed limit is ${this.speedlimit}`)
        return `Hey my car name is ${this.carname} and its speed limit is ${this.speedlimit}`
    }
}

let car1 = new Car("RR", "300km/hr")
let car2 = new Car("BMW", "250km/hr")

console.log(car1, car1.carname)

car1.welcome()
car2.welcome()


//property

function Student(name, batch) {
    this.name = name,
        this.batch = batch
}
const s1 = new Student("Jack", "B53")
console.log(s1.name)

//add property
Student.prototype.gender = "male"

console.log(s1.gender)

const s2 = new Student("John", "B53")
console.log(s2.gender)