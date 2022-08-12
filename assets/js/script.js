// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character possibilities:
var lowerCaseSet = ["abcdefghijklmnopqrstuvwxyz"];
var upperCaseSet = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numberSet = ["0123456789"];
var specialSet = ["!@#$%&*_-<>/"];


// Generate Password function
function generatePassword() {
  // Clear old generating data
  var generatedPW = "";
  var generateOptions = "";


  // 1. Prompt user for password length (length between 8-128)

  var characters = window.prompt(
    "How many characters? Must be between 8 and 128."
  );
  while (characters < 8 || characters > 128 || !characters) {
    characters = window.prompt("Please choose a value between 8 and 128.");
  }

  // 2. Prompt use for other password criteria (must choose at least one)
  var lowerCase = window.confirm("Click 'Confirm' to include lowercase letters.");
  var upperCase = window.confirm("Click 'Confirm' to include uppercase letters.");
  var numbers = window.confirm("Click 'Confirm' to include numbers.");
  var special = window.confirm("Click 'Confirm' to include special characters.");

  // 3. Validate the input
  while (!lowerCase && !upperCase && !numbers && !special) {
    window.alert(
      "Please select 'OK' for at least one of the previous 4 options."
    );
    var lowerCase = window.confirm("Click 'Confirm' to include lowercase letters.");
    var upperCase = window.confirm("Click 'Confirm' to include uppercase letters.");
    var numbers = window.confirm("Click 'Confirm' to include numbers.");
    var special = window.confirm("Click 'Confirm' to include special characters.");
  }
  console.log(lowerCase, upperCase, numbers, special);

  // 3. Use input to create a string that includes only confirmed criteria
  if (lowerCase) {
    generateOptions += lowerCaseSet;
  }

  if (upperCase) {
    generateOptions += upperCaseSet;
  }

  if (numbers) {
    generateOptions += numberSet;
  }

  if (special) {
    generateOptions += specialSet;
  }

  // 4. Generate password
  for (var i = 0; i < characters; i++) {
    generatedPW += generateOptions.charAt(Math.floor(Math.random() * generateOptions.length));
  }

  // 4. Display generated password on page
  return generatedPW;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
