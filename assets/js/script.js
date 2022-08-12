// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate Password function
function generatePassword() {
  // 1. Prompt user for password criteria
  //    a. Length between 8 - 128
  //    b. Ask about special characters & everything else

  var characters = window.prompt(
    "How many characters? Must be between 8 and 128."
  );
  while (characters < 8 || characters > 128 || !characters) {
    characters = window.prompt("Please choose a value between 8 and 128.");
  }

  function charConfirm() {
    var lowerCase = window.confirm(
      "Click 'Confirm' to include lowercase letters."
    );
    var upperCase = window.confirm(
      "Click 'Confirm' to include uppercase letters."
    );
    var numbers = window.confirm("Click 'Confirm' to include numbers.");
    var special = window.confirm(
      "Click 'Confirm' to include special characters."
    );

    // 2. Validate the input
    if (!lowerCase && !upperCase && !numbers && !special) {
      window.alert(
        "Please select 'OK' for at least one of the previous 4 options."
      );
      charConfirm();
    }
  }
  charConfirm();
  // 3. Generate password based on criteria

  // 4. Display generated password on page}
}

// Character possibilities:
var lowerCaseSet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseSet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numberSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialSet = ["!", "@", "#", "$", "%", "&", "*", "_", "-", "<", ">", "/"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
