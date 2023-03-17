
if (!localStorage.getItem('userInput')) {
  localstorage();
} else {
  setForm();
}
userName.onchange = localstorage;
userEmail.onchange = localstorage;
userMessage.onchange = localstorage;