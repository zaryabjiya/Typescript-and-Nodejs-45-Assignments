
let alienColor :string = 'Green';

// Write an if else chain
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if(alienColor === 'Green'){
    console.log("The player just earned 5 points for shooting the alien.");
}else{
    console.log("The player just earned 10 points.");  
}

// If the alien’s color isn’t green, print a statement that the player just earned 10 points
alienColor = "Yellow";
if(alienColor === "Green"){
    console.log("The player just earned 5 points for shooting the alien.!");
}else{
    console.log("The player just earned 10 points.");  
}




