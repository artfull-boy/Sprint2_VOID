const formInputFields = {
  firstName: document.getElementById('FirstName'),
  lastName: document.getElementById('LastName'),
  email: document.getElementById('email'),
  message: document.getElementById('message'),
}
const successMessage = document.getElementById('successMessage');
const btn = document.getElementById('button');

const validateInput = (input) => {
  if (input.value === '') {
    input.classList.add('border-red-500');
    input.nextElementSibling.classList.remove('hidden');
    return false;
  } else {
    if (input.getAttribute('type') === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(input.value)) {
        input.classList.add('border-red-500');
        input.nextElementSibling.classList.remove('hidden');
        return false;
      }
    }
    input.classList.remove('border-red-500');
    input.nextElementSibling.classList.add('hidden');
    return true;
  }
};

for (const input in formInputFields) {
  formInputFields[input].addEventListener('input', () => validateInput(formInputFields[input]));
  formInputFields[input].addEventListener('blur', () => validateInput(formInputFields[input]));
}

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
    btn.classList.add("bg-green-500");
    successMessage.classList.remove('hidden');
    setTimeout(() => {
    btn.classList.remove("bg-green-500");
      successMessage.classList.add('hidden');
    }, 3000);
  }
  else {
    btn.classList.add('bg-[#ff0033]','hover:bg-[#ff0033]');
    setTimeout(() => {
      btn.classList.remove('bg-[#ff0033]', 'hover:bg-[#ff0033]');
    }, 2000);
  }
};

document.getElementById('contact-form').addEventListener('submit', handleSubmit);
