// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables for each criteria of password
const chars = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

// sets initial password as blank
var passwordCharSet = "";

// function to generate password using sequential steps
function generatePassword() {
  var length = prompt(
    "Please enter a number from 8 to 128 for password length."
  );
  if (length < 8) {
    alert("Too short");
  } else
    var lowercase = window.confirm(
      "Would you like to use lowercase letters? Press ok for YES, cancel for NO"
    );
  if (lowercase) {
    passwordCharSet += chars.lowercase;
  }

  var uppercase = window.confirm(
    "Would you like to use uppercase letters? Press ok for YES, cancel for NO"
  );
  if (uppercase) {
    passwordCharSet += chars.uppercase;
  }

  var symbols = window.confirm(
    "Would you like to use symbols? Press ok for YES, cancel for NO"
  );
  if (symbols) {
    passwordCharSet += chars.symbol;
  }

  var numbers = window.confirm(
    "Would you like to use numbers? Press ok for YES, cancel for NO"
  );
  if (numbers) {
    passwordCharSet += chars.number;
  }
  var password = "";
  for (let i = 0; i < length; i++) {
    password +=
      passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)];
  }
  return password;
}

// displays password generated as a string value
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
