// Assignment Code
var generateBtn = document.querySelector("#generate");

var quesOne= prompt("How many characters would you like your password? Choose between 8 and 128");
var quesTwo= prompt("Would you like to include numbers?");
var quesThree= prompt("Would you like to include lower case letters?");
var quesFour= prompt("Would you like to include upper case letters?");
var quesFive= prompt("Would you like to include special characters?");

var randomNum = confirm("This will include numbers.");
var randomUpper = confirm("This will include lower case letters.");
var randomLower = confirm("This will include upper case letters.");
var randomSpecial = confirm ("This will include special characters.");

var randomNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var randomUpper = ["a", "b", "c", "d", "e", "f", "g",]
var randomLower = ["H", "I", "J", "K", "L", "M"]
var randomSpecial = ["!", "#", "$", "%", "&", "*", "+","-", "/", ":", "@", "{", "~"];
// console.log(randomNum);
// console.log(randomUpper);
// console.log(randomLower);
// console.log(randomSpecial);

function generatePassword() {
var favNum = window.confirm ("Would you like a number?");

// for (var i = 0; i < zooAnimals.length; i++) { 
//   console.log("I am going to zoo to see " + zooAnimals[i] + ".");
// }

  return "Hello World";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
