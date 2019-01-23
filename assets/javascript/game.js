// Create Variables

$(document).ready(function () {

    var randomNumber = 0;
    var losses = 0;
    var wins = 0;
    var planets = "planet-images";
    var operator = "";
    var counter = 0;

    $(".planet").each(function () {
        // for each element I find I am going to use jQuerys each method to run a function on each
        // generate a random number
        var random = Math.floor(Math.random() * 11) + 1;
        // store that random number in the data-value attribute
        $(this).attr("data-value", random);
    });
    // create a random number between 19-120 that the player is trying to hit at the start of the game
    randomNumber = Math.floor(Math.random() * 69) + 30;
    $("#number-value").html(randomNumber);

    
    function reset() {
        //reset score to 0 and populate text
        counter = 0;
        $("#score03").html(counter);

        //generate new random number populate text
        randomNumber = Math.floor(Math.random() * 69) + 30;
        $("#number-value").html(randomNumber);



        //generate new random #s for each planet below here
        $(".planet").each(function () {
            // for each element I find I am going to use jQuerys each method to run a function on each
            // generate a random number
            var random = Math.floor(Math.random() * 11) + 1;
            // store that random number in the data-value attribute
            $(this).attr("data-value", random);
        });

    }


    // I changed your selector to only select the images themselves
    $(".planet").on("click", function () {
        // grab the value from the attribute we created on line 21
        var planetValue = parseInt($(this).attr("data-value"));
        counter += planetValue;


        // If the total score is below the random number=lose, if the total is equal to=win
        if (randomNumber === counter) {
            console.log("you won");
            wins++;
            $("#wins").text(wins);
            reset();
        }

        if (counter > randomNumber) {
            console.log("you lost");
            losses++;
            $("#losses").text(losses);
            reset();
        }

        if (counter < randomNumber) {
            $("#score03").html(counter);


        }

    });


});