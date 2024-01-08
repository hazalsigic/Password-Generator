// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var passwordLength = prompt("Please enter the length of the password");

// Function to prompt user for password options
function getPasswordOptions() { 
  var passwordCharacter = [];
  if (passwordLength >= 8 && passwordLength <= 128) {
  var confirmLowercase = confirm("Would you like to include lowercase in your password?");
  if (confirmLowercase == true) {
    var passwordCharacter = lowerCasedCharacters;
  } else {
    passwordCharacter = passwordCharacter;
  }
  var confirmUppercase = confirm("Would you like to include uppercase in your password?");
  if (confirmUppercase == true) {
    passwordCharacter = passwordCharacter.concat(upperCasedCharacters);
  } else {
    passwordCharacter = passwordCharacter;
  }
  var confirmNumeric = confirm("Would you like to include numbers in your password?");
  if (confirmNumeric == true) {
    passwordCharacter = passwordCharacter.concat(numericCharacters);
  } else {
    passwordCharacter = passwordCharacter;
  }  
  var confirmSpecialCharacters = confirm("Would you like to include special characters in your password?");
  if (confirmSpecialCharacters == true) {
    passwordCharacter = passwordCharacter.concat(specialCharacters);
  } else {
    passwordCharacter = passwordCharacter;
  } 
  if (passwordCharacter == null) {
    alert("You should pick at least one character type");
  } else {
  return passwordCharacter;
  }
} else { alert("Your password length must be at least 8 characters but no more than 128")};
} ;

var getPassword = getPasswordOptions();
 
// Function for getting a random element from an array

function getRandom(getPassword) {
  return getPassword[Math.floor(Math.random() * getPassword.length)]
};


// Function to generate password with user input
function generatePassword() {
  var passwordArray = [];

for (var i = 0; i<passwordLength; i++){
   var randomElement = getRandom(getPassword);
  passwordArray.push(randomElement);
}
var passwordWithCommas = passwordArray.join();
var password = passwordWithCommas.split(',').map(s => s.trim()).join('');
  return password;
};



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
