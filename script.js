//debugger;
// Assignment Code
//set up global variables
var generateBtn = document.querySelector("#generate");
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var specialCharacters = '~`! @#$%^&*()-_+={}[]|\\;:"<>,./?';


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Function to generate combination of password 
function generatePass() {
  let pass = '';
  
  let passLength = prompt('How many characters in the password?');
  for (passLength > 128 || passLength < 8) {
    alert('Password must contain 8-128 characters.')
    return passLength;
  }
 

  for (let i = 1; i <= 8; i++) {
      let char = Math.floor(Math.random()
          * str.length + 1);

      pass += str.charAt(char)
  }

  return pass;
}

console.log(generatePass());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(numbers);