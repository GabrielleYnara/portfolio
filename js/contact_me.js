const contactForm = document.querySelector(".contact-me");
  
contactForm.addEventListener('submit', event => {
  // Prevent default form submission
  event.preventDefault();
  
  // Check if the form is valid
  if (contactForm.checkValidity() === false) {
    event.stopPropagation();
  } else {
    // Submits and reset the form
    contactForm.submit();
    contactForm.reset();
  }
  // Add the 'was-validated' class to display feedback
  contactForm.classList.add('was-validated');
});
/**
 * Refenreces
 * submit() - https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit
 * reset() - https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset
 */