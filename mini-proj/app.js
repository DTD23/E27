//FAQS ACCORDION
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

// FORM
const form = document.querySelector('#myForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  alert('Mission accomplished! Your submission has been processed.');
  form.reset(); // reset
});

//Button
  const appleBtn = document.getElementById('appleBtn');
  appleBtn.addEventListener('click', function() {
    window.open('https://www.apple.com/ph/app-store/');
  });
  const googlePlayBtn = document.getElementById('googlePlayBtn');
  googlePlayBtn.addEventListener('click', function() {
    window.open('https://play.google.com/store');
  });






