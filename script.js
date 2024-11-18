document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      if (name && email && message) {
        formMessage.textContent = "Dziękujemy za kontakt, " + name + "! Odezwiemy się wkrótce.";
        formMessage.style.color = "green";
        form.reset();
      } else {
        formMessage.textContent = "Wypełnij wszystkie pola!";
        formMessage.style.color = "red";
      }
    });
  });
  