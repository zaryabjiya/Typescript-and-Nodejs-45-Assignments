// Write a program that creates Objects containing these items.

// Data type of person object
interface person {
    name: string,
    age: number,
    nationality: string,
    student: boolean,
}

//Person object
let person :person = {
    name: "zaryab",
    age: 20,
    nationality: "Pakistani",
    student: true
}
console.log(person);




// Data type of car object
interface car {
    maker: string,
    color: string,
    automatic: boolean
}

//Car object
let car = {
    maker: "Toyota",
    color: "Black",
    automatic: true
}
console.log(car);
