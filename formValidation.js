

const form = document.querySelector('form');
const msg = 'THE FORM IS NOT SENT, THE EMAIL SHOULD BE IN LOWERCASE.';
form.addEventListener('submit', (event) => {
  const mail = form.elements.email;

  const emailValid = validateEmail(form, mail, msg);

  if (!emailValid) {
    event.preventDefault();
  }
});