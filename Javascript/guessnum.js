var number = 9;

var stringGuess = prompt("Guess the lucky number");
var guessNumber = Number(stringGuess);

if(guessNumber === number) {
  console.log("You guess the lucky number " + number);
} else if(guessNumber > number) {
  console.log("Nope you did not guess the lucky number, try guessing lower");
} else {
  console.log("Nope you did not guess the lucky number, try guessing higher");
}
