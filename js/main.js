const mobileNav = document.querySelector('.mobile__nav__button');
const mobileMenu = document.querySelector('.mobile__menu');

mobileNav.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
  mobileMenu.classList.toggle('open__menu');
  mobileNav.getAttribute('aria-expanded') === 'true' ? mobileNav.setAttribute('aria-expanded', 'false') : mobileNav.setAttribute('aria-expanded', 'true');
})

function sendEmailJs() {
  let params = {
    name: document.getElementById('name').value,
    lastname: document.getElementById('lastname').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  }

  emailjs.send("service_q9zdngm", "template_5hlinbs", params).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Votre message a bien été envoyé. Merci pour votre message !");
      document.getElementById('name').value = "";
      document.getElementById('lastname').value = "";
      document.getElementById('email').value = "";
      document.getElementById('message').value = "";
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Votre message n'a pas été envoyé. Une erreur est survenue !");
    }
  )
}

/* let validFirst = false;
let validLast = false;
let validEmail = false;


const getPrenom = document.querySelector("#lastname");
getPrenom.addEventListener("input", validatePrenom);


const getNom = document.querySelector("#name");
getNom.addEventListener("input", validateNom);


const getMail = document.querySelector("#email");
getMail.addEventListener("input", validateMail);

function validatePrenom() {
  const RegExPrenom = /[0-9|._]+/;
  if (getPrenom.value.trim().length < 2 || RegExPrenom.test(getPrenom.value)) {
    showError(getPrenom);
    validFirst = false;
  } else {
    hideError(getPrenom);
    validFirst = true;
  }
};

function validateNom() {
  const RegExNom = /[0-9|._]+/;
  if (getNom.value.trim().length < 2 || RegExNom.test(getNom.value)) {
    showError(getNom);
    validLast = false;
  } else {
    hideError(getNom);
    validLast = true;
  }
};

function validateMail() {
  const RegExMail = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm;
  showError(getMail);
  validEmail = false;
  if (RegExMail.test(getMail.value.trim())) {
    hideError(getMail);
    validEmail = true;
  }
}; */