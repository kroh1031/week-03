// Assign characters to each corresponding character type
var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numbers = "1234567890";
var symbols = "!@#$%^&*(){}[]=<>/,."


// Assignment Code (given)
var generateBtn = document.querySelector("#generate");


// Write password to the #password input (given)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Generate final password
function generatePassword() {
  var finalPassword = "";
  var allowedCharacters = "";

  //Ask user for password length 
  var passLength = prompt("How many characters would you like your password to contain?", "8");
  // If length of password is less than 8 or greater than 128 return an alert
  if (isNaN(passLength)) {
  alert("Please enter a number.")
  return "";
  }  
  if (passLength < 8) {
    alert("Password length must be at least 8 characters.")
    return "";
 }
  else if (passLength > 128) {
    alert("Password length must not be more than 128 characters.");
    return "";
 }
  
  //Ask user if lowercase characters are desired
  var passLower = confirm("Click OK to confirm including lowercase characters.")
  // If yes
  if (passLower === true) {
    allowedCharacters += lowerCase;
  }

  //Ask user if uppercase characters are desired
  var passUpper = confirm("Click OK to confirm including uppercase characters.")
  // If yes
  if (passUpper === true) {
    allowedCharacters += upperCase;
  }

  // Ask user if numbers are desired
  var passNumber = confirm("Click OK to confirm including numeric characters.")
  // If yes
  if (passNumber === true) {
    allowedCharacters += numbers;
  }

  // Ask user if symbols are desired
  var passSymbol = confirm("Click OK to confirm including special characters.")
  // If yes
  if (passSymbol === true) {
    allowedCharacters += symbols;
  }

//  If user doesn't select any of the character types, make error msg pop up
  if (passUpper === false && passLower === false && passNumber === false && passSymbol === false) {
  alert("Please select at least one character type.")
  return "";
  }

  // Randomize and combine all selected characters and return final password into #password input
  for (let i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * allowedCharacters.length);

    var randomCharacter = allowedCharacters[randomIndex];
    finalPassword += randomCharacter
  }
  return finalPassword;
}


// Add event listener to generate button (given)
generateBtn.addEventListener("click", writePassword);









