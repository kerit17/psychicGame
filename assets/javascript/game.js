//variables
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var guesses = 15;
var losses = 0;
var lettersGuessed = "";
var computerChoice;
randomLetter();


//Computer selects a random letter - do a function versus variable because will want to reference function later to start another round
function randomLetter() {
	computerChoice = alphabet [Math.floor(Math.random()*alphabet.length)];
	console.log(computerChoice);
}

//user input
document.onkeyup = function(keyPressed) {
	//determine if letter or number was pressed
	var guess = keyPressed.key;	
	letterTyped = false;
	console.log(guess);	

	for (var i = 0; i < alphabet.length; i++) 
	{
		if (guess === alphabet[i]) {
			if (lettersGuessed.includes(guess)) {
				alert("Letter has already been guessed. Please choose another letter.");
				letterTyped = true;
			}
			else {
				if (guess === computerChoice) {
					lettersGuessed = "";
					wins++; 
					alert("Winner! To play again, press ok.");
					console.log(wins);
					guesses = 15;
					randomLetter();
				}
				if (guesses <= 0) {
					lettersGuessed = "";
					losses++;
					alert("You did not guess the letter...bummer. To play again, press ok.");
					console.log(losses);
					guesses = 15;
					randomLetter();
				}
				else {
					guesses --;
					console.log(guesses);
					lettersGuessed = lettersGuessed + "" + guess + "";
				}
				

var toHTML = 
	"<h2>Guess what letter I'm thinking of.</h2>" + "<br> <br>" + 
 	"<h3>Wins: " + wins + "</h3>" + 
	"<h3>Losses: " + losses + "</h3>" + 
	"<h3>Guesses Remaining: " + guesses + "</h3>" + 
	"<h3>Your Guesses so far: " + lettersGuessed + "</h3>";

document.querySelector("#toHTML").innerHTML = toHTML;
letterTyped = true;
break;
}
}

}
if (letterTyped === false) {
	alert("Please select a letter");
}	
}
		