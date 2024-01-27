const animals = {
    animalName: "🐯",
    type: "Wild Animal",
    count: 500
}


const {
    animalName,
    type,
    count,
    country = ["india", "africa"],
} = {
    animalName: "🐯",
    type: "Wild Animal",
    count: 500
}

console.log(animalName, type, country)
//🐯 Wild Animal  ['india', 'africa']


const avenger = {
    name: "Tony Stark",
    house: "🏠",
    networth: "💰💰💰💰",
    power: "🤖",
    phrase: "He love himself"
}

const {
    name,
    networth,
    power = "💿",
    skill = ["genius", "philanthropist", "billionarie"]
} = {
    name: "Tony Stark",
    house: "🏠",
    networth: "💰💰💰💰",
    power: "🤖",
    phrase: "He love himself"
}

console.log(name, networth, power, skill)
//Tony Stark 💰💰💰💰 🤖 (3) ['genius', 'philanthropist', 'billionarie']


const avg = {
    name: "Tony Stark",
    house: "🏠",
    networth: "💰💰💰💰",
    power: "🤖",
    phrase: "He love himself"
}

const avg1 = { ...avg, nation: "IN", power: "💿" }

console.log(avg1)


const avg2 = { nation: "IN", power: "💿", ...avg }

console.log(avg2)
