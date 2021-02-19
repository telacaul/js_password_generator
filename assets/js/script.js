//unchanging (constant) variables for generator
const criteria = {
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    lowerLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    upperLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    specials: ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'],
    userChoices: [],
    passwordLength: null,
    lowerChoice: null,
    upperChoice: null,
    numbersChoice: null,
    specialsChoice: null,
  
  };
    
  //*** GENERATING PASSWORD CRITERIA ***/
  
  //welcome alert and initiate user prompt for lowercase criteria
  const beginPromptCriteria = () => {
    alert("Welcome to Password Generator!\n" + "In your next steps, you must choose:\n" +
    "** Length of password (between 8 and 128 characters)\n" +
    "** Lowercase characters\n" +
    "** Uppercase characters\n" +
    "** Numbers\n" +
    "** Special characters");
    promptLowerCriteria();
  };
  
  //uses lowerLetters array if 'yes' or moves to next prompt if 'cancel'
  const promptLowerCriteria = () => {
    let promptLower = confirm("Would you like to include lower-case letters?\nPress OK if yes or press Cancel if no");
    criteria.lowerChoice = promptLower;
    if (promptLower) {
      criteria.userChoices.push(criteria.lowerLetters);
    } 
    promptUpperCriteria();
  };
  
  //uses upperLetters array if 'yes' or moves to next prompt if 'cancel'
  const promptUpperCriteria = () => {
    let promptUpper = confirm('Would you like to include upper-case letters?\nPress OK if yes or press Cancel if no');
    criteria.upperChoice = promptUpper;
    if (promptUpper) {
      criteria.userChoices.push(criteria.upperLetters);
    }
    promptNumbersCriteria();
  };
  
  //uses numbers array if 'yes' or moves to next prompt if 'cancel'
  const promptNumbersCriteria = () => {
    let promptNumbers = confirm('Would you like to include numbers?\nPress OK if yes or press Cancel if no');
    criteria.numbersChoice = promptNumbers;
    if (promptNumbers) {
      criteria.userChoices.push(criteria.numbers);
    } 
    promptSpecialsCriteria();
  };
  
  //uses specials array if 'yes' or moves to validates criteria if 'cancel'
  const promptSpecialsCriteria = () => {
    let promptSpecials = confirm('Would you like to include special characters?\nPress OK if yes or press Cancel if no');
    criteria.specialsChoice = promptSpecials;
    if (promptSpecials) {
      criteria.userChoices.push(criteria.specials);
    } 
    validateCriteria();
  };
  
  //if clicked cancel on all criteria, cycles back through beginPromptCriteria
  const validateCriteria = () => {
    if ((criteria.lowerChoice === false) && (criteria.upperChoice === false) && (criteria.numbersChoice === false) && (criteria.specialsChoice === false)) {
      alert('You must pick at least one criteria!');
      beginPromptCriteria();
    } else {
      alert('Great! You have picked at least one criteria.\n\n Lets select your password length!');
    }
    promptPasswordLength();
  };
  
  //prompt for password length
  const promptPasswordLength = () => {
    let promptLength = prompt("Please type the length of the password\n" + 
    "It must be between 8 and 128 characters");
    //makes declaration an integer 
    criteria.passwordLength = parseInt(promptLength, 10);
  
    if ((promptLength >= 8) && (promptLength <= 128)) {
      alert('Great! We have all your criteria. Press the Generate Password button below to recieve your password. Click until you find one that suits you best!');
    } else {
      alert('Your password must be between 8 and 128 characters! Please try again.')
      //brings user back to promptLength function
      promptPasswordLength();
    }
  };
  
  //randomly selects from user choices function
  const randomUserChoices = () => {
    let mergedChoices = criteria.userChoices.flat(1);
    //merges into one function
    return mergedChoices[Math.floor(Math.random() * mergedChoices.length)]
  };
  
  
  //generates password with specifications above
  const generatePassword = () => {
    let newPassword = [];
  
    for (i = 0; i < criteria.passwordLength; i++) {
      newPassword.push(randomUserChoices());
    }
  
    return newPassword.join('');
  };

  //PUSH BUTTON TO GENERATE PASSWORD
  const reset = {
    resetBtn: document.createElement("button"),
  
  };
  
  // targets button to generate password
  const generateBtn = document.querySelector("#generate");
  
  // password will be written if all criteria have been selected
  const usePassBtn = () => {
    if (!criteria.userChoices[0]) {
      beginPromptCriteria();
    } else {
      let password = generatePassword();
      let passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
    
  };
  
  // click button to generate password
  generateBtn.addEventListener("click", usePassBtn);