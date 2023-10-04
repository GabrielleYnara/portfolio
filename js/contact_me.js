const contactForm = document.querySelector(".contact-me");
  
contactForm.addEventListener('submit', event => {
  // Prevent default form submission
  event.preventDefault();
  
  // Check if the form is valid
  if (contactForm.checkValidity() === false) {
    event.stopPropagation();
  } else {
  // Send email
  Email.send({
    SecureToken : "33c98016-0416-476d-bf35-cf3c9f5e0ccf",
    To : 'gabrielleynara@ymail.com',
    From : document.querySelector("#email").value,
    Subject : "Contact from Portfolio",
    Body : document.querySelector("#message").value
    }).then(
      message => alert(message)
    );
  }
  // Add the 'was-validated' class to display feedback
  contactForm.classList.add('was-validated');
});