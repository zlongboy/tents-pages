




//Initialize form elements for form submit functions
const form = document.querySelector('.form-container')
const nameInput = document.querySelector('input[name="full-name"]')
const nameErrorDiv = document.querySelector('#name-error-msg')
const dateInput = document.querySelector('input[name="post-date"]')
const dateErrorDiv = document.querySelector('#date-error-msg')
const commentInput = document.querySelector('textarea[name="post-msg"]')
const commentErrorDiv = document.querySelector('#comment-error-msg')

//Define error messages
const errorMsg = {
  empty: 'Required.',
  nameInvalid: 'Name must only contain letters and spaces.',
  dateInvalid: 'Please enter a valid date.',
  commentInvalid: 'Comments must be 500 characters or less.'
}

//Apply error styles functions
function applyErrorStyles(input, div, msg) {
  input.classList.add('error-input');
  div.innerText = msg
}
function removeErrorStyles(input, div) {
  //TODO: loop until (while) and remove errors when match
  input.classList.remove('error-input')
  div.innerText = ''
}

//Validate name
function isValidName(nameValue) {
  const nameRegex = /^[a-zA-Z\s]*$/
  if (!nameRegex.test(nameValue)) {
    applyErrorStyles(nameInput, nameErrorDiv, errorMsg.nameInvalid)
  }
  else if (nameValue.trim().length < 1) {
    applyErrorStyles(nameInput, nameErrorDiv, errorMsg.empty)
  } 
  else {
    removeErrorStyles(nameInput, nameErrorDiv)
    return true
  }
}
//Validate date
function isValidDate(dateValue) { 
  const dateRegex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/
  //TODO: Refactor regex to be only dates after current date
  const convertedDate = moment(dateInput.value).format('MM/DD/YYYY')
  //TODO: date input does not exist unless full value entered... how can I trigger error message in this case?
  if (!dateRegex.test(convertedDate)) {
    applyErrorStyles(dateInput, dateErrorDiv, errorMsg.dateInvalid)
  }
  else {
    removeErrorStyles(dateInput, dateErrorDiv)
    return true
  }
}
//Validate comment
function isValidComment(comment) { 
  if (comment.length > 500) {
    applyErrorStyles(commentInput, commentErrorDiv, errorMsg.commentInvalid)
  }
  else if (comment.trim().length < 1) {
    applyErrorStyles(commentInput, commentErrorDiv, errorMsg.empty)
  } 
  else {
    removeErrorStyles(commentInput, commentErrorDiv)
    return true
  }
}

//Run all validation on submit
form.addEventListener('submit', function(element) {
  element.preventDefault();
  //TODO: add validation loop here
  const nameValidation = isValidName(nameInput.value);
  const dateValidation = isValidDate(dateInput.value);
  const commentValidation = isValidComment(commentInput.value);
  if (nameValidation && dateValidation && commentValidation) {
    createNewPost();
    //Clears comment input after submit for best user experience
    commentInput.value = ''
  }
});
