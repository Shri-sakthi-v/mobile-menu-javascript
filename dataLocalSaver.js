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
if (!localStorage.getItem('userInput')) {
  localstorage();
} else {
  setForm();
}
userName.onchange = localstorage;
userEmail.onchange = localstorage;
userMessage.onchange = localstorage;
