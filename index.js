document.querySelectorAll(".breadcrumb-item a").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const targetForm = event.target.getAttribute("data-target");
    document.querySelectorAll(".wizard-container > div").forEach((form) => {
      form.classList.add("hidden");
    });
    document.getElementById(targetForm).classList.remove("hidden");
  });
});

document.querySelectorAll(".btn-send").forEach((button) => {
  button.addEventListener("click", (event) => {
    const nextForm = event.target.getAttribute("data-next");
    const currentForm = event.target.closest("form");

    if (currentForm.checkValidity()) {
      document.querySelectorAll(".wizard-container > div").forEach((form) => {
        form.classList.add("hidden");
      });
      document.getElementById(nextForm).classList.remove("hidden");
    } else {
      currentForm.reportValidity();
    }
  });
});

document.querySelectorAll(".btn-back").forEach((button) => {
  button.addEventListener("click", (event) => {
    const prevForm = event.target.getAttribute("data-prev");
    document.querySelectorAll(".wizard-container > div").forEach((form) => {
      form.classList.add("hidden");
    });
    document.getElementById(prevForm).classList.remove("hidden");
  });
});
