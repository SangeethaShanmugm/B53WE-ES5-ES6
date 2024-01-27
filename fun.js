//scope => lifetime of a variable
//let, const  => block scope
// {}  => block
console.log(y2)
{
    // console.log(y1)
    let y1 = 10;
    var y2 = 20
}

console.log(y2)

// not defined(error) vs undefined(value)


//lexical scope & hoisting

var price = 1000

function getPrice() {
    console.log("The Old price is", price)
    // var price = 500
    console.log("The new price is", price)
}

getPrice()


// Hoisting
// var => redeclare and reassign
// let => no redeclare but can reassign
// const  => no redeclare & reassign

var a = 10 //declaration
a = 10  //assignment

var a = 20 //redeclaration
a = 20 //reassignment

console.log(x)
//1000 lines
var x = 10
console.log(x)

//JS  => Does compilation happens? Yes
// JIT => Just In Time Compilation

// 1. Compilation Phase
// 2. Execution Phase
// JS & context


//ex -1 => var 
// 1. Compilation Phase => console.log() => skip
console.log(z)// skip
var z = 20 // JS => Do you know z? No| What is the value? => context => undefined
console.log(z)// skip


// 2. Execution Phase
console.log(z)// JS => Do you know z? Yes | What is the value? => context => undefined
var z = 20 // JS => Do you know z? yes | What is the value? => context => note down => 20
console.log(z)// JS => Do you know z? yes | What is the value? => context => 20



//ex-2 => let
// 1. Compilation Phase => console.log() => skip
console.log(z1)// skip
let z1 = 20 // JS => Do you know z? No | What is the value? => context => don't initialize
console.log(z1)// skip


// 2. Execution Phase
// console.log(z1)// JS => Do you know z?  Yes | What is the value? => context => throw error
// let z1 = 20
// console.log(z1)


//shadowing 

var price = 1000 //Pant

function getPrice() {
    console.log("The Old price is", price)
    var price = 500 //MSD
    console.log("The new price is", price)
}

getPrice()
