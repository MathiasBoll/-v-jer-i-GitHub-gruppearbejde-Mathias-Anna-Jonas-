document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault(); /* Prevent actual form submission */
    
    /* Get form values */
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("mail").value.trim();
    
   /*  Simple validation */
    if(name === "" || email === "") {
      alert("Udfyld venligst både navn og e-mail.");
      return;
    }
    
    /* Basic email validation */
    if(!validateEmail(email)) {
      alert("Indtast venligst en gyldig e-mail adresse.");
      return;
    }
    
    /* Simulate success */
    alert("Tak for din tilmelding, " + name + "!");

    /*  Reset form */
    form.reset();
  });

 /*  Simple email validation function */
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});

