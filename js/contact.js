import { mobileNav } from "./nav.js";

//CONTACT NAV
mobileNav();

//CONTACT FORM
const form = document.querySelector('#contact-form');

const input = function(inputName) {
  return document.querySelector(`input[name="${inputName}"]`);
};

const errorContainer = function(inputErrored) {
  return document.querySelector(`#${inputErrored}-error-msg`);
};

//ERROR MESSAGES
const errorMsg = {
  empty: 'Required.',
  nameInvalid: 'Name must only contain letters and spaces.',
  emailInvalid: 'Please enter a valid email address.',
  phoneInvalid: 'Please enter a valid phone number.'
};

//HELPER FUNCTIONS
function applyErrorStyles(input, div, msg) {
  input.classList.add('error-input');
  div.innerText = msg;
}

function removeErrorStyles(input, div) {
  input.classList.remove('error-input');
  div.innerText = '';
}

//VALIDATION FUNCTIONS
const isValidName = function(name, input, error) {
  const nameRegex = /^[a-zA-Z\s]*$/ ; 
  if (!nameRegex.test(name)) {
    applyErrorStyles(input, error, errorMsg.nameInvalid);
  }
  else if (name.trim().length < 1) {
    applyErrorStyles(input, error, errorMsg.empty);
  } 
  else {
    removeErrorStyles(input, error);
    return true;
  };
};

const isValidEmail = function(email, input, error) {
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/ ;
    if (!emailRegex.test(email)) {
      applyErrorStyles(input, error, errorMsg.emailInvalid);
    }
    else if (email.trim().length < 1) {
      applyErrorStyles(input, error, errorMsg.empty);
    } 
    else {
      removeErrorStyles(input, error);
      return true;
    }
  }

const isValidPhone = function(phone, input, error) {
  const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/ ;
  if (!phoneRegex.test(phone)) {
    applyErrorStyles(input, error, errorMsg.phoneInvalid);
  }
  else if (phone.trim().length < 1) {
    applyErrorStyles(input, error, errorMsg.empty);
  } 
  else {
    removeErrorStyles(input, error);
    return true;
  };
};

//EVALUATE
const checkInput = function(inputName, isValid) {
  return isValid(input(inputName).value, input(inputName), errorContainer(inputName));
}

//RUN VALIDATION ON SUBMIT
form.addEventListener('submit', function(element) {
  element.preventDefault();

  // if ((checkInput('firstName', isValidName)) && (checkInput('lastName', isValidName)) && (checkInput('email', isValidEmail)) && (checkInput('phone', isValidPhone))) {
  //   //TODO: Add submit function here (if necessary);
  // };
  //REFACTOR OPPURTUNITY: Why does above cause validation to run one at a time?

  let firstNameValidation = checkInput('firstName', isValidName);
  let lastNameValidation = checkInput('lastName', isValidName);
  let emailValidation = checkInput('email', isValidEmail);
  let phoneValidation = checkInput('phone', isValidPhone);

  if (lastNameValidation && firstNameValidation && emailValidation && phoneValidation) {
    //TODO: Add submit function here (if necessary);
  };
});
