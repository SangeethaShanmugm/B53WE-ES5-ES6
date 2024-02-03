//spread => copy, clone

let a = ["a", "b", "c"]

let b = [...a]

console.log(a)
console.log(b)

b.push("d")

console.log(a)
console.log(b)

//clone

let arr1 = [1, 2, 3]
let arr2 = arr1//copy by reference => same address

console.log(arr1)
console.log(arr2)

arr1.push(4)

console.log(arr1)
console.log(arr2)

arr2.push(5)

console.log(arr1)
console.log(arr2)



const originalArray = [1, 2, 3]
const copiedArray = [...originalArray]
console.log(originalArray)
console.log(copiedArray)

console.log(originalArray === copiedArray)

//rest parameter => when we use spread operator as a parameter to function

let r1 = function (...a) {
    console.log(a)
}
r1(1)
r1(1, 2, 3,)
r1(1, 2, 3, 4, 5,)

function add(a, b, c) {
    console.log(a + b + c)
}

const n1 = [1, 2, 3, 4, 5, 6, 7, 8]
add(...n1)