
// VARIABLES

var counter = 0;
var wins = 0;
var loses = 0;
var targetNumber = 0;
var myImages = ["assets/images/google+.png", "assets/images/amazon.png", 
"assets/images/instagram.png", "assets/images/linkedin.png"];

$("#winsBox").text(wins);
$("#losesBox").text(loses);

startGame();

// Start Game
function startGame() {
	//Reset Random num for Bean Goal
	randomNumber();

	//Reset Counter num for Bean Counter
	counter = 0;
	$("#yourBeanScore").text(counter);

	//Reset Random values on cups
	randomCupNumber();

}

// Random # to acheive between 19-120; to reset
// with every new game.
function randomNumber() {
	targetNumber = Math.floor((Math.random() *120) +19);
	$("#beanGoal").text(targetNumber);
}

//Random # value for each cup (1-12)
function randomCupNumber(){
	$("#cups").empty()
	for (var i = 0; i < myImages.length; i++) {
		var imageCups  = $("<img>");
		imageCups.addClass("cups-image rounded");
		imageCups.attr("src", myImages[i]);
		var numberOptions = Math.floor((Math.random() *12) + 1);
		imageCups.attr("data-cupsvalue", numberOptions);
		$("#cups").append(imageCups);
	}
}
// On click to find out coffee cups value during game

$("#cups").on("click",".cups-image",function(){
	var cupsValue = ($(this).attr("data-cupsvalue"));
	cupsValue = parseInt(cupsValue);
	// Score counter to keep score during game
	counter+= cupsValue;
	$("#yourBeanScore").text(counter);


	// Wins counter & Loses counter

	if(counter=== targetNumber){
		alert("You Win!");	
		wins+= 1;
		$("#winsBox").text(wins);
		startGame();
	}
	

	else if (counter>= targetNumber){
		alert("You Lose!");
		loses+= 1;
		$("#losesBox").text(loses);
		startGame();
	}

});












 

