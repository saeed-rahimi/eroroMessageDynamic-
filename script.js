"use strict"

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Name is required.";
      nameError.style.display = "block";
      isValid = false;
    } else {
      nameError.style.display = "none";
    }

    const ageInput = document.getElementById("age");
    const ageError = document.getElementById("ageError");
    const ageValue = parseInt(ageInput.value);

    if (isNaN(ageValue) || ageValue < 18 || ageValue > 100) {
      ageError.textContent = "Age must be a number between 18 and 100.";
      ageError.style.display = "block";
      isValid = false;
    } else {
      ageError.style.display = "none";
    }

  });
