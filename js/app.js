// SELECTORS

const appDiv = document.querySelector(".app");
const qInput = document.querySelector(".question input");
const startBtn = document.querySelector(".start");
const howTo = document.querySelector(".how-to");

// EVENT LISTENERS

startBtn.addEventListener("click", page2);

// FUNCTIONS

function page2() {
  const question = document.createElement("h1");
  question.innerText = qInput.value;
  question.classList.add("page2-title");
  if (question.innerText === "") {
    if (document.querySelector(".error-message") === null) {
      const error = document.createElement("p");
      error.innerText = "Type your question above!";
      error.classList.add("error-message");
      appDiv.appendChild(error);
    }
  } else {
    howTo.parentNode.removeChild(howTo);
    qInput.parentNode.removeChild(qInput);
    startBtn.parentNode.removeChild(startBtn);
    appDiv.style.height = "90vh";
    appDiv.appendChild(question);
  }
}
