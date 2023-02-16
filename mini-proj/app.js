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
  event.preventDefault(); // prevent the default form submission behavior
  
  alert('Mission accomplished! Your submission has been processed.');
  form.reset(); // reset the form
});


