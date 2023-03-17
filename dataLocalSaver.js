const userName = form.elements.name;
const userEmail = form.elements.email;
const userMessage = form.elements.message;
function localstorage() {
  const userInput = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem('userInput', JSON.stringify(userInput));
}
function setForm() {
  const storedInput = JSON.parse(localStorage.getItem('userInput'));
  const currentUserName = storedInput.name;
  const currentUserEmail = storedInput.email;
  const currentMessage = storedInput.message;

  form.elements.name.value = currentUserName;
  form.elements.email.value = currentUserEmail;
  form.elements.message.value = currentMessage;
}
if (!localStorage.getItem('userInput')) {
  localstorage();
} else {
  setForm();
}
userName.onchange = localstorage;
userEmail.onchange = localstorage;
userMessage.onchange = localstorage;
