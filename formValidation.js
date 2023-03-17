function isLowerCase(input) {
  const str = input.value.trim();
  return str === str.toLowerCase();
}

function showMessage(form, invalidMsg) {
  const target = form.querySelector('span');
  target.innerText = invalidMsg;
}

const form = document.querySelector('form');
const msg = 'THE FORM IS NOT SENT, THE EMAIL SHOULD BE IN LOWERCASE.';
form.addEventListener('submit', (event) => {
  const mail = form.elements.email;

  const emailValid = validateEmail(form, mail, msg);

  if (!emailValid) {
    event.preventDefault();
  }
});
