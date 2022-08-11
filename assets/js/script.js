// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var userInput = {
    characters: window.prompt("How many characters?"),
    lowercase: window.confirm("Click 'Confirm' to include lowercase letters."),
    uppercase: window.confirm("Click 'Confirm' to include uppercase letters."),
    numbers: window.confirm("Click 'Confirm' to include numbers."),
    special: window.confirm("Click 'Confirm' to include special characters."),
  };

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
