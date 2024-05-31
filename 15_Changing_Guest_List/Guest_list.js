"use strict";
let Guest_list = ['Imran Khan', 'Nawaz Shareef', 'Asif Zardari'];
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n');
}
let absentGuest = 'Imran Khan';
let newGuest = 'Kamran Tessori';
Guest_list[0] = newGuest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n');
}
console.log(`Mr. ${absentGuest} is not comimg to the party.`);
