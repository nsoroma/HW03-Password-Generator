
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";



// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword () {

    // Ask user for desired password length; If the length is between 8 and 128 characters then pwLengthCheck = true
    var pwLength = window.prompt("Enter Desired Password Length");
    var pwLengthCheck = ((pwLength.length > 7) && (pwLength.length < 129));
//    var pwTypeCheck = window.prompt(typeof )
    
    var buff = new Uint8Array(pwLength);

    if (pwLengthCheck) {
      var pwDesiredLength = window.prompt("Enter Desired Password Length");

      window.crypto.getRandomValues(buff);
      return btoa(String.fromCharCode.apply(null,buff));
      }

      // If user pressed Cancel, immediately end function
//      else (!pwLengthCheck) {
      else { 
      return;
      }
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





console.log("Hello");