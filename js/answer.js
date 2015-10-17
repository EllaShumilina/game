// write your code in a .js file, stored in the js directory
// you should create one file for each exercise

confirm("Do you want to play?");


var guess = Math.floor(100 * Math.random()) + 1;
var answer = prompt ("What is a secret number? From 1-100.");

if(guess === answer) {
   alert("Yay, you got the number!");
}   else {

if(answer < guess)
      prompt("Whoops, wrong one. Guess higher!");
if(answer < guess)
      prompt("Whoops, wrong one. Guess lower!");
}
