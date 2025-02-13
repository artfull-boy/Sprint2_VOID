const formInputFields = {
  firstName: document.getElementById('FirstName'),
  lastName: document.getElementById('LastName'),
  email: document.getElementById('email'),
  message: document.getElementById('message'),
}
const successMessage = document.getElementById('successMessage');

const validateInput = (input) => {
  if (input.value === '') {
    input.classList.add('border-red-500');
    input.nextElementSibling.classList.remove('hidden');
    return false;
  } else {
    input.classList.remove('border-red-500');
    input.nextElementSibling.classList.add('hidden');
    return true;
  }
};

const clearInputs = () => {
  formInputFields.firstName.value = '';
  formInputFields.lastName.value = '';
  formInputFields.email.value = '';
  formInputFields.message.value = '';
};

const handleSubmit = (e) => {
  e.preventDefault();

  const isFirstNameValid = validateInput(formInputFields.firstName);
  const isLastNameValid = validateInput(formInputFields.lastName);
  const isEmailValid = validateInput(formInputFields.email);
  const isMessageValid = validateInput(formInputFields.message);

  if (isFirstNameValid && isLastNameValid && isEmailValid && isMessageValid) {
    console.log('First Name:', formInputFields.firstName.value);
    console.log('Last Name:', formInputFields.lastName.value);
    console.log('Email:', formInputFields.email.value);
    console.log('Message:', formInputFields.message.value);

    clearInputs();
    successMessage.classList.remove('hidden');
    setTimeout(() => {
      successMessage.classList.add('hidden');
    }, 3000);
  }
};

document.getElementById('contact-form').addEventListener('submit', handleSubmit);
