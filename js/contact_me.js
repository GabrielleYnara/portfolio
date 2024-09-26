window.addEventListener('DOMContentLoaded', () => {
  // Check if language is already set in localStorage and generate resume
  const lang = localStorage.getItem("selectedLanguage") || "en"; // Default to English if none is found
  generatePlaceholders(); // Generate content based on stored language
});

// Listen for the custom languageChange event
document.addEventListener("languageChange", () => {
  console.log("contact_me.js notified, gerenate placeholders");
  generatePlaceholders();
});

function generatePlaceholders() {
  console.log("generatePlaceholders");
  contactForm.reset();
  contactForm.classList.remove('was-validated');
  const translations = JSON.parse(localStorage.getItem("translations"));
  document.getElementById("identity").setAttribute("placeholder", translations.name_placeholder);
  document.getElementById("email").setAttribute("placeholder", translations.email_placeholder);
  document.getElementById("message").setAttribute("placeholder", translations.message_placeholder);
}
const contactForm = document.querySelector(".contact-me");

contactForm.addEventListener('submit', event => {
  // Prevent default form submission
  event.preventDefault();

  // Check if the form is valid
  if (isValid()) {
    // Submits the form
    contactForm.submit();
    // console.log("Form submitted!");
    
  } else {
    console.log("Form not valid");
    event.stopPropagation();
  }
  
});

function isValid(){
  const translations = JSON.parse(localStorage.getItem("translations"));
  let name = document.getElementById("identity");
  let email = document.getElementById("email");
  let message = document.getElementById("message");
  let count = 0;
  let errorFields = document.querySelectorAll(".invalid-feedback");
  errorFields.forEach((element) =>{
    element.classList.remove("show");
  })

  if (name.value == ""){
    let errorMsg = document.getElementById("invalid-identity");
    errorMsg.value = translations.required_name;
    errorMsg.classList.add("show");
    name.classList.add('invalid');
    name.focus();
    count++;
  } else {
    name.classList.remove('invalid');
  }
  if (email.value == ""){
    let errorMsg = document.getElementById("invalid-email");
    errorMsg.value = translations.required_name;
    errorMsg.classList.add("show");
    email.classList.add('invalid');
    email.focus();
    count++;
  } else {
    email.classList.remove('invalid');
  }
  if (message.value == ""){
    let errorMsg = document.getElementById("invalid-message");
    errorMsg.value = translations.required_name;
    errorMsg.classList.add("show");
    message.classList.add('invalid');
    message.focus();
    count++;
  } else {
    message.classList.remove('invalid');
  }
  if (count > 0) { 
    return false;
  } 
    return true;
  }
  

/**
 * Refenreces
 * submit() - https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit
 * reset() - https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset
 */