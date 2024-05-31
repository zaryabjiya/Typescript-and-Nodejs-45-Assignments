let Guest_list :string[] = ['Imran Khan','Nawaz Sharif','Asif Zardari'];

// for(let i=0; i<Guest_list.length; i++){

//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n')

// }h

let absentGuest :string = 'Imran Khan' ;

let newGuest :string = 'Kamran Tessori' ;

Guest_list[0] = newGuest ;

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n')

}

console.log(`Mr. ${absentGuest} is not comimg to the party.`);

console.log('Good News! We find big table, so we are inviting 3 more guest.')

Guest_list.unshift('Sir Zia Khan');
Guest_list.splice(2 , 0 , 'Shehbaz Sharif');
Guest_list.push('Bilawal Bhutto');

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n')

}
