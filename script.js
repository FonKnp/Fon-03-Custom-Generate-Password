//debugger;
// Assignment Code
//set up global variables
var generateBtn = document.querySelector("#generate");
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numberS = '0123456789';
var specialCharacters = '~`! @#$%^&*()-_+={}[]|\\;:"<>,./?';


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Function to generate combination of password 
function generatePassword() {
  
  let pass = '';

  //define how long the password will be
  let passLength = parseInt(window.prompt('How many characters in the password?'));

  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert('Password must contain 8-128 characters.');
    return;
  }

  if (window.confirm('Would you like an uppercase in the password?')) {
    pass += upperCase;
  }

  if (window.confirm('Would you like a lowercase in the password?')) {
    pass += lowerCase;
  }

  if (window.confirm('Would you like numbers in the password?')) {
    pass += numberS;
  }

  if (window.confirm('Would you like special characters in the password?')) {
    pass += specialCharacters;
  }

  if (pass === '') {
    alert('At least one character type must be selected.');
    return;
  }

  let passcode = '';
  for (let i = 0; i < passLength; i++) {
    let randomIndex = Math.floor(Math.random() * pass.length);
    passcode += pass[randomIndex];
  }
  return passcode;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);