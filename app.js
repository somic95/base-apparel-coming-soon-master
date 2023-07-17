const submit = document.querySelector(".submit");
const errorText = document.querySelector(".error-txt");
const form = document.querySelector("form");
const input = document.querySelector("input");
const errorIcon = document.querySelector(".error-icon");
const thanksText = document.querySelector(".thanks-txt")

form.addEventListener("submit", validate);
submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const inputValue = input.value.trim();

  if (isEmail(inputValue)) {
    thanksText.style.display = "block";
    errorText.style.display = "none";
    errorIcon.style.display = "none";
    input.style.borderColor = "green";

  } else {
    errorText.style.display = "block";
    errorIcon.style.display = "block";
  } 
}

function isEmail(input) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}



