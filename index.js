//
function goToStep(step) {
  if (step === 2) {
    // Проверка валидности контактной формы
    const contactForm = document.getElementById("contactForm");
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Здесь добавляем ваш шаблон

    // Проверка валидности email
    if (!contactForm.checkValidity() || !emailPattern.test(email)) {
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
      } else {
        alert(
          "Пожалуйста, введите действительный адрес электронной почты: например, klima3775@gmail.com"
        );
      }
      return;
    }
  }

  if (step === 3) {
    // Проверка валидности формы количества
    const quantityForm = document.getElementById("quantityForm");
    if (!quantityForm.checkValidity()) {
      quantityForm.reportValidity();
      return;
    }

    // Расчет цены
    const quantity = parseInt(document.getElementById("quantity").value);
    let price = 0;
    if (quantity > 10 && quantity <= 100) {
      price = 100;
    } else if (quantity > 100 && quantity <= 1000) {
      price = 1000;
    } else {
      price = 10;
    }
    document.getElementById("priceDisplay").textContent = `$${price}`;
  }

  // Обновление состояния навигации хлебной крошки
  document.querySelectorAll(".breadcrumb-item").forEach((item, index) => {
    if (index < step) {
      item.classList.add("completed");
    } else {
      item.classList.remove("completed");
    }
    item.classList.toggle("active", index === step - 1);
  });

  // Показать текущую форму и скрыть другие
  document.querySelectorAll(".wizard-container > div").forEach((form) => {
    form.classList.add("hidden");
  });
  document.getElementById(`form${step}`).classList.remove("hidden");
}

function sendEmail() {
  // Simulate email sending
  const message = "Email sent successfully!";
  document.getElementById(
    "successMessage"
  ).innerHTML = `<i class="bi bi-check-square-fill"></i> ${message}`;
  goToStep(4); // Go to done step
}

function startAgain() {
  // Reset form fields
  document.getElementById("contactForm").reset();
  document.getElementById("quantityForm").reset();
  document.getElementById("priceDisplay").textContent = "$0";
  document.getElementById("successMessage").innerHTML = ""; // Clear success message
  goToStep(1); // Go back to step 1

  // Reset breadcrumb navigation
  document.querySelectorAll(".breadcrumb-item").forEach((item) => {
    item.classList.remove("completed", "active");
  });
  document
    .querySelector(".breadcrumb-item:nth-child(2)")
    .classList.add("active");
}

// Prevent default action for home button
document.getElementById("homeButton").addEventListener("click", (event) => {
  event.preventDefault();
});

// Initialize the wizard
goToStep(1);
