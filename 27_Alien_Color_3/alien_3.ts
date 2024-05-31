// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.


let alienColor :string = "Green";

// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.

// Version 1
if(alienColor === "Green"){
    console.log("Player earned 5 points");

}else if(alienColor === "Yellow"){
    console.log("Player earned 10 points.");

}else if (alienColor === "Red"){
    console.log("Player earned 15 points.");
}else{
    console.log("Please select right color");
}


// Version 2
alienColor = "Yellow";

if(alienColor === "Green"){
    console.log("Player earned 5 points");

}else if(alienColor === "Yellow"){
    console.log("Player earned 10 points.");

}else if (alienColor === "Red"){
    console.log("Player earned 15 points.");
}else{
    console.log("Please select right color");
}


// Version 3
alienColor = "Red";

if(alienColor === "Green"){
    console.log("Player earned 5 points");

}else if(alienColor === "Yellow"){
    console.log("Player earned 10 points.");

}else if (alienColor === "Red"){
    console.log("Player earned 15 points.");
}else{
    console.log("Please select right color");
}
