const contactForm = document.querySelector(".contact-me");

// Reset the form when the page fully loads or is navigated back to
window.onload = function() {
  contactForm.reset();
  contactForm.classList.remove('was-validated');
};
contactForm.addEventListener('submit', event => {
  // Prevent default form submission
  event.preventDefault();
  
  // Check if the form is valid
  if (contactForm.checkValidity() === false) {
    event.stopPropagation();
  } else {
    // Submits the form
    contactForm.submit();
  }
  // Add the 'was-validated' class to display feedback
  contactForm.classList.add('was-validated');
});

/**
 * Refenreces
 * submit() - https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit
 * reset() - https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset
 */