const profile = ["Babu", "Dinesh", "Gayathri"]
//                   0       1        2

console.log(profile[0])


//array destructure

const profile1 = ["Dilli", "Babu", "dillibabu@gmail.com"]

const [firstName, lastName, email] = profile1

console.log(firstName)
console.log(email)

const [first, last, Email, age = 25] = ["Dinesh", "Kumar", "dineshkumar@gmail.com", 20]

console.log(Email)
console.log(age)