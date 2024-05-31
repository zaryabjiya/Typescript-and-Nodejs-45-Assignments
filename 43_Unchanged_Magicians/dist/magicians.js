"use strict";
//
let magician = ['Harry Houdini', 'Chris Angel', 'David Blaine', 'Shin Lim'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = 'The Great ' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const magicianCopyArray = copyArray(magician);
make_great(magicianCopyArray);
console.log("\n\nThis is my original array:");
show_magicians(magician);
console.log("\n\nThis is my modified copy of array:");
show_magicians(magicianCopyArray);
