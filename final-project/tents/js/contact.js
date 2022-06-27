import { mobileNav } from "./nav.js";

//CONTACT NAV
mobileNav();

//CONTACT FORM
const form = document.querySelector('#contact-form');
const firstName = document.querySelector('input[name="firstName"]');
const lastName = document.querySelector('input[name="lastName"]');
const email = document.querySelector('input[name="email"]');
const phone = document.querySelector('input[name="phone"]');

const firstNameError = document.querySelector('#firstName-error-msg');
const lastNameError = document.querySelector('#lastName-error-msg');
const emailError = document.querySelector('#email-error-msg');
const phoneError = document.querySelector('#phone-error-msg');

//Define error messages
const errorMsg = {
  empty: 'Required.',
  nameInvalid: 'Name must only contain letters and spaces.',
  emailInvalid: 'Please enter a valid email address.',
  phoneInvalid: 'Please enter a valid phone number.'
};

//Helper functions
function applyErrorStyles(input, div, msg) {
  input.classList.add('error-input');
  div.innerText = msg;
}
function removeErrorStyles(input, div) {
  input.classList.remove('error-input');
  div.innerText = '';
}

//Validation functions
function isValidName(name, input, error) {
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

function isValidEmail(email, input, error) {
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

  function isValidPhone(phone, input, error) {
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

//Run all validation functions on submit
form.addEventListener('submit', function(element) {
  element.preventDefault();
  const firstNameValidation = isValidName(firstName.value, firstName, firstNameError);
  const lastNameValidation = isValidName(lastName.value, lastName, lastNameError);
  const emailValidation = isValidEmail(email.value, email, emailError);
  const phoneValidation = isValidPhone(phone.value, phone, phoneError)
  if (lastNameValidation && firstNameValidation && emailValidation && phoneValidation) {
  //TODO: Add submit function here (if necessary)
  };
});
