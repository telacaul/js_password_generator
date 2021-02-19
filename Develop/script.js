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
    name: "numbers",
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

//Functions
//user interface

var userIntro = function(){
  //prompt for length of password
  var info = prompt("Please type the length of the password\n" + 
  "It must be between 8 and 128 characters");

  //set range with boolean 
  var range = false;

  //validation or error message
  while(!range){
    //if input not a number
    if(!isNaN(info)){
      info = parseInt(info);
      if (info >= 9 && info <= 128){
        range = true;
      }else{
        alert("Error: You must choose a number between 8 and 128");
        info = prompt ("Please type the length of the password\n" + 
        "It must be between 8 and 128 characters");
      }
    } else {
      alert("You must choose a valid number");
      info = prompt ("Please type the length of the password\n" + 
      "It must be between 8 and 128 characters");
    }
  }

  return info;
};

var userSelection = function(){
  var x = 0; //user must select at least one option
    while (x===0)
    {
      for(var i=0; i<userChoice.length; i++) {
        userChoice[i].value = confirm("Would you like to include " + userChoice[i].name);
        if (userChoice[i].value){
          x++;
        }
      }
  
    //make sure user chose one option
  if(x===0){
    alert("You have to choose at least one option for your password" +
      "/n 1. " + userChoice[0].name+
      "/n 2. " + userChoice[1].name+
      "/n 3. " + userChoice[2].name+
      "/n 4. " + userChoice[3].name+);
    }
  }
  return x;
};

var generatePassword = function(){
  var strong = "";
  var pass = "";

  alert("Welcome to Password Generator!/n"+"In your next steps, you must choose:\n" +
  "** Length of password (between 8 and 128 characters)\n" +
  "** Lowercase characters\n" +
  "** Uppercase characters\n" +
  "** Numbers\n" +
  "** Special characters");

  lengthPass = userIntro();
  var x = userSelection();

  for(var i=0, i<Math.floor(lengthPass/x)+1; i++) {
    if(userChoice[0].value){
      strong += listCharacter.getLowerCase()[Math.floor(Math.random()*listCharacter.getLowerCase().length)];
    }

    if(userChoice[1].value){
      strong += listCharacter.getUpperCase()[Math.floor(Math.random()*listCharacter.getUpperCase().length)];
    }

    
  }
}



 











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
for (var i=0; i<Math.floor(lengthPass/x)+1; i++){
}
}

