//Assignment Code

//Variables
//value of length of password
var lengthPass= null; 

//choice of character types (Boolean)
userChoice = [
  {
    name: "lowercase characters",
    value: false
  },

  {
    name: "uppercase characters",
    value: false
  },
  {
    name: "numbers"
    value: false
  },
  {
    name: "special characters",
    value: false
  }
];

//character options for above character types
var listCharacter = {
  lettersLow: "abcdefghijklmnopqrstuvwxyz",
  lettersUp: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  specialChar: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",

  //functions to pull options from above list

  getLowerCase: function(){
    return this.lettersLow;
  },

  getUpperCase: function(){
    return this.lettersUp;
  },

  getNumbers: function(){
    return this.numbers;
  },

  getSpecialChar: function(){
    return this.specialChar;
  }
};




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//genearate random password
function generate(){

//possible password values
let values = "";

let password = "";

//for loop to choose password characters

}

