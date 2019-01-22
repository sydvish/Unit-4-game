// The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters.

// Here's how the app works:

// There will be four crystals displayed as buttons on the page.

// The player will be shown a random number at the start of the game.

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.
// The player wins if their total score matches the random number from the beginning of the game.

// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// Option 1 Game design notes

// The random number shown at the start of the game should be between 19 - 120.

// Each crystal should have a random hidden value between 1 - 12.


// Pseudo Code Here

// Create Variables

$(document).ready(function () {

    var randomNumber = "";
    var losses = "";
    var wins = "";
    var planets = "planet-images";
    var operator = "";
    var counter = 0;

// create a random number between 19-120 that the player is trying to hit at the start of the game
    randomNumber = Math.floor(Math.random() * 69) + 30;
    $("#number-value").html(randomNumber);

// create a loop generating random numbers between 1- 12 for each planet
// Q- how do I assign it to the planet images? I tried copying the code from above that's generating the random number and my planet images disappeared
    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 11) + 1;
        
        console.log(random);
    }
});
// Create an onclick event & turn HTML elements into integers, then add to score (HTML id #score03)
// Q This generates an error in my console & i'm not sure how to proprly set this up
$(".planet-images").on("click", function () {

    var planetValue = ($(this).attr("data-crystalvalue"));

    planetValue = parseInt(planetValue);

//  Every click, from every planet adds to the global counter. Add up the value of each planet to the score card
    
    
    $("#score03").html(randomNumber);
    
    console.log(randomNumber);


// If the total score is below the random number=lose, if the total is equal to=win
    if (randomNumber === random) {
        console.log("you won");
        wins++;
    } else {
        console.log("you lost");
        losses++;
    }




});


// 

// var planets = $("<div>");
// planets.attr("data-random", random);







// var planetvalue = ($(this).attr("data-planetvalue"));
//     planetvalue = parseInt(planetvalue);
//     // We then add the crystalValue to the user's "counter" which is a global variable.
//     // Every click, from every crystal adds to the global counter.
//     counter += planetvalue;

//     // All of the same game win-lose logic applies. So the rest remains unchanged.
//     console.log("New score: " + counter);

//     if (counter === targetNumber) {
//         wins++;
//         console.log("You win!");
//     }

//     else if (counter >= targetNumber) {
//         losses++;
//         console.log("You lose!!");
//     }