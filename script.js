var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numbers = "1234567890";
var symbols = "`~!@#$%^&*()_-+=[]"


// Assignment Code (given)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input (given)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var finalPassword = "";
  var allowedCharacters = "";

  //ask user for pw length 
  var passLength = prompt("How many characters would you like your password to contain?", "8");
  // if (passLength.length < 8) {
  //   return null;
  // } else if (passLength.length > 25) {
  //   return null;
  // } else {
  //   return "";
  // }

  //do you want to use lowercase?
  var passLower = confirm("Click OK to confirm including lowercase characters.")
  //if yes
  if (passLower === true) {
     allowedCharacters += lowerCase;
  }
  //if no??
  
 

  //do you want Uppercase?
  var passUpper = confirm("Click OK to confirm including uppercase characters.")
  //if yes
  if (passUpper === true) {
    allowedCharacters += upperCase;
  }
  // if no
  // allowedCharacters += upperCase;

  // do you want numbers?
var passNumber = confirm("Click OK to confirm including numeric characters.")
// if yes
if (passNumber === true) {
  allowedCharacters += numbers;
}
// if no

// do you want symbols?
var passSymbol = confirm("Click OK to confirm including special characters.")
// if yes
if (passSymbol === true) {
  allowedCharacters += symbols;
}


//length, allowedCharacters 'qwertyQWERTY123455'
for (let i=0; i < passLength; i++) {
  var randomIndex = Math.floor(Math.random() * allowedCharacters.length);
  
  var randomCharacter = allowedCharacters[randomIndex];
  finalPassword += randomCharacter
}
  return finalPassword;
}



// Add event listener to generate button (given)
generateBtn.addEventListener("click", writePassword);




// Prompts I need to include in my password generator:
// length (how many characters in password)
// special characters
// numeric characters
// lowercase characters
// uppercase characters


