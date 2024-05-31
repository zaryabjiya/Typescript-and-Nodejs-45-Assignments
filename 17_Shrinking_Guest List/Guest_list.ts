let Guest_list :string[] = ['Imran Khan','Nawaz Sharif','Asif Zardari'];

// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n')
// }

let absentGuest :string = 'Imran Khan' ;
let newGuest :string = 'Kamran Tessori' ;
Guest_list[0] = newGuest ;

// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n')
// }

console.log(`Mr. ${absentGuest} is not comimg to the party.`);
console.log('Good News! We find big table, so we are inviting 3 more guest.')

//Adding 3 guests in array.
Guest_list.unshift('Sir Zia Khan');
Guest_list.splice(2 , 0 , 'Shehbaz Sharif');
Guest_list.push('Bilawal Bhutto');

//Printing 6 guests array.
for(let i=0; i<Guest_list.length; i++){
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n')
}

//Sorry message to guest for not inviting.
console.log('\nSorry we can not arrange big table, only 2 people will be invited.');

//Removed guest
while(Guest_list.length > 2){
   let remove_Guest = Guest_list.pop();
   console.log(`Sorry Mr.${remove_Guest}, You are not invited for dinner`);
}

//Remaining 2 invited guests.
for(let i=0; i<Guest_list.length; i++){
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nYou are still invited.\n\nThank You!\n');
}

//Removed all guests from array.
Guest_list.splice(0 , 2);
console.log(Guest_list);

