
// VARIABLES

var counter = 0;
var wins = 0;
var loses = 0;
$("#winsBox").text(wins);
$("#losesBox").text(loses);

// Random # to acheive between 19-120; to reset
// with every new game.
function randomNumber() {
	var targetNumbers = Math.floor((Math.random() *120) +19);
}

//Random # value for each cup (1-12)
function randomCupNumber(){
	var numberOptions = Math.floor((Math.random() *12) + 1);
}
console.log ("numberOptions");
for (var i = 0; i < numberOptions.length; i++) {
	var imageCups  = $("<img>");
	imageCups.addclass("cups-image");
	imageCups.attr("src", "assets/images/google+.png");
	imageCups.attr("data-cupsvalue") numberOptions[i];
	$("#cups").append(imageCups);
}
// On click to find out coffee cups value during game

$(".cups-image").on("click",function(){
	var cupsValue = ($(this).attr("data-cupsvalue"));
	cupsValue = parseINt(cupsValue);
	// Score counter to keep score during game
	counter+= cupsValue;
	alert("New Score:" + counter);


	// Wins counter & Loses counter

	if(counter=== targetNumber);
	alert("You Win!");

	else if (counter>= targetNumber){
		alert("You Lose!");
	}
});












 

