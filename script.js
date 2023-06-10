"use strict";

// Selecting HTML and css selectors
const generateBTN = document.getElementById("btn");
const qrIMG = document.getElementById("qrImg");
const textInput = document.getElementById("textInput");
const imageContainer = document.getElementById("image-container");

generateBTN.addEventListener("click", function (e) {
  e.preventDefault();
  let textInputValue = textInput.value;

  // Proving a qr-code only when the user's input is not empty
  if (textInputValue.length > 0) {
    qrIMG.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textInputValue} `;
    qrIMG.classList.remove("hidden");
    imageContainer.classList.add("show-opacity");
  } else {
    alert("please enter text or URL");
  }
});

// when user edits the input
textInput.addEventListener("keydown", function () {
  qrIMG.classList.add("hidden");
  imageContainer.classList.remove("show-opacity");
});
