// Assignment Code
// Characters
var generateBtn = document.querySelector("#generate");

var randomNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var randomLower = ["a", "b", "c", "d", "e", "f", "g",]
var randomUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var randomSpecial = ["!", "#", "$", "%", "&", "*", "+", "-", "/", ":", "@", "{", "~"];
// We use this array to contain all of the choices that the user has selected
var userChoices = [];
var finalPass = "";

function generatePassword() {
  //Question 1 is a prompt because user has to select a number. 
  var quesOne = prompt("How many characters would you like your password? Choose between 8 and 128");
  if (quesOne < 8 || quesOne > 128) {
    alert("Please enter a number between 8 and 128.");
  } else {
  var quesTwo = confirm("Select 'okay' for numbers, select 'cancel' for no numbers.");
  if (quesTwo) {
    userChoices += randomNum
  };
  var quesThree = confirm("Select okay for upper case, select cancel for no upper case.");
  if (quesThree) {
    userChoices += randomUpper
  };
  var quesFour = confirm("Select okay for lower case, select cancel for no lower case.");
  if (quesFour) {
    userChoices += randomLower
  }
  var quesFive = confirm("Select okay for special characters, select cancel for no special characters.");
  if (quesFive) {
    userChoices += randomSpecial
  }
}

var finalPass = "";
for (var i = 0; i < quesOne; i++) {
  finalPass += userChoices.charAt(Math.floor(Math.random() * userChoices.length));
}
return finalPass;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

