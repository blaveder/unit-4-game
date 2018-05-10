// score equals random number between 19 and 120;
// four gems on the screen
// each gem holds a secret number by random between 1 and 10;
// click on gem adds to your score
// score adds up and needs to total random number
// if score is greater you lose
// if score is equal to random you win
// on win, random regenerates
// on win gems regenerate new numbers
// win total += 1
// if lose. lose total += 1;



// Generated Paragraphs for the instructions
function instruction() {
    var paraGraphs = [
        "You will be given a random number at the start of the game",
        "There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score",
        "The value of each crysal is hidden from you until you click on it.",
        "Each time when the game starts, the game will change the values of each crystal."
    ];

    for (var i = 0; i < paraGraphs.length; i++) {
        var para = $("<p></p>");
        para.addClass("instructionP animated bounce");
        para.text(paraGraphs[i]);
        $("#setinstructions").append(para);
        console.log(para);
    };
}

$(document).ready(function () {
    var score = Math.floor(Math.random() * 121) + 19;
    var win = 0;
    loses = 0;
    var yourScore = 0;

    instruction();
    const newLocal = "assets/images/orange.png";
    const newLocal_1 = "assets/images/blue.png";
    const newLocal_2 = "assets/images/pink.png";
    const newLocal_3 = "assets/images/green.png";

    var gems = [newLocal, newLocal_1, newLocal_2, newLocal_3];
    var gemRandomNumber = Math.floor((Math.random() * 15) + 2);

    for (var j = 0; j < gems.length; j++) {
        // create a div called gemContainer
        var gemContainer = $("<div id='gemContainer'></div>");

        //gemContainer div goes to div#cardContianer
        $("#cardContainer").append(gemContainer);
        //create an image
        var gemsDynamicImages = $("<img>");

        gemsDynamicImages.attr({ class: "gemImg animated hvr-push", src: gems[j], data: gemRandomNumber });
        //append image to div#gemContainer
        $(gemContainer).append(gemsDynamicImages);

    };
    document.getElementById("score").innerHTML = score;

    function clear() {
        gemRandomNumber = Math.floor((Math.random() * 15) + 2);
        gemsDynamicImages.attr({ class: "gemImg animated hvr-push", src: gems[j], data: gemRandomNumber });
        $(gemContainer).append(gemsDynamicImages);
        score = Math.floor(Math.random() * 121) + 19;
        document.getElementById("score").innerHTML = score;
        console.log("this running");
        yourScore = 0;
        document.getElementById("yourScore").innerHTML = yourScore;
    };


    $(".gemImg").on("click", function () {
        var crystalValue = ($(this).attr("data"));
        crystalValue = parseInt(crystalValue);
        yourScore += crystalValue;

        document.getElementById("yourScore").innerHTML = yourScore;

        if (yourScore === score) {

            win++;
            document.getElementById("wins").innerHTML = win;
            clear();

        }

        else if (yourScore >= score) {

            loses++;
            document.getElementById("losses").innerHTML = loses;
            clear();
        };



    });
});
