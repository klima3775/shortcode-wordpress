function goToStep(step) {
  if (step === 2 && !document.getElementById("contactForm").checkValidity()) {
    alert("Please fill in the required fields.");
    return;
  }
  if (step === 3 && !document.getElementById("quantityForm").checkValidity()) {
    alert("Please enter a valid quantity (1-1000).");
    return;
  }

  if (step === 3) {
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

  document.querySelectorAll(".breadcrumb-item").forEach((item, index) => {
    if (index < step) {
      item.classList.add("completed");
    } else {
      item.classList.remove("completed");
    }
    item.classList.toggle("active", index === step - 1);
  });

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
  ).innerHTML = `<i class="bi bi-check-circle"></i> ${message}`;
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
    .querySelector(".breadcrumb-item.active a")
    .classList.remove("active");
  document
    .querySelector(".breadcrumb-item:nth-child(2) a")
    .classList.add("active");
}

// Initialize the wizard
goToStep(1);
