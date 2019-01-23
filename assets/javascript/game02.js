// // The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters.

// // Here's how the app works:

// // There will be four crystals displayed as buttons on the page.
// // Tucker - This is done in the HTML so nothing we have to do on our end.

// // The player will be shown a random number at the start of the game.
// // Tucker - done at line 45 - PERFECT!

// // When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
// // Tucker - I see your for loop at lines 51 - 55 which is awesome, but how are we actually going to get those 
// // values associated with the images them selves?
// // A - So just like everything in code. There is multiple ways to do this. I will show you one way.
// // I added a class of "planet" to each img so that I can easily access them with jQuery

// // Select all elements with a class of planet
// // $(".planet").each(function(){
// //     // for each element I find I am going to use jQuerys each method to run a function on each
// //     // generate a random number
// //     var random = Math.floor(Math.random() * 11) + 1;
// //     // store that random number in the data-value attribute
// //     $(this).attr("data-value", random);
// // });

// // Your game will hide this amount until the player clicks a crystal.
// // When they do click one, update the player's score counter.
// // The player wins if their total score matches the random number from the beginning of the game.

// // The player loses if their score goes above the random number.

// // The game restarts whenever the player wins or loses.

// // When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// // The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// // Option 1 Game design notes

// // The random number shown at the start of the game should be between 19 - 120.

// // Each crystal should have a random hidden value between 1 - 12.


// // Pseudo Code Here

// // Create Variables

// $(document).ready(function () {

//     var randomNumber = 0;
//     var losses = 0;
//     var wins = 0;
//     var planets = "planet-images";
//     var operator = "";
//     var counter = 0;

//     $(".planet").each(function () {
//         // for each element I find I am going to use jQuerys each method to run a function on each
//         // generate a random number
//         var random = Math.floor(Math.random() * 11) + 1;
//         // store that random number in the data-value attribute
//         $(this).attr("data-value", random);
//     });

//     randomNumber = Math.floor(Math.random() * 69) + 30;
//     $("#number-value").html(randomNumber);

//     $(".planet").on("click", function () {
//         // grab the value from the attribute we created on line 21
//         var planetValue = parseInt($(this).attr("data-value"));
//         counter += planetValue;

//         $("#score03").html(counter);

//         if (randomNumber === random) {
//             console.log("you won");
//             wins++;
//         } else {
//             console.log("you lost");
//             losses++;
//         }
//     });

// });


var randomNumber = "";
var losses = 0;
var wins = 0;
var counter = 0;


resetGame();

$(".planet").on("click", function () {
    var planetValue = $(this).attr("data-value");
    counter = counter + parseInt(random);
    $("#number-value").text(runningScore);
    // audio.play();
    // audio.currentTime = 0;
    checkScore();
});

function checkScore() {
    if (runningScore === randomNumber) {
        alert("You Win!")
        $("#wins").text(++win);
        resetGame();
    }

    if (runningScore > randomNumber) {
        alert("You lose!")
        $("#losses").text(++loss);
        resetGame();
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 20) + 30;
    runningScore = 0;

    $(".planet").each(function () {
        var random = Math.floor(Math.random() * 9) + 1;
        $(this).attr("data-value", random);
    });

    $("#randomTargetCounter").text(randomNumber);
    $("#userScoreCounter").text(runningScore);
}





