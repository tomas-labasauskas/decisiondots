// SELECTORS

const appDiv = document.querySelector(".app");
const qInput = document.querySelector(".question input");
const startBtn = document.querySelector(".start");
const howTo = document.querySelector(".how-to");

// EVENT LISTENERS

startBtn.addEventListener("click", page2);

// FUNCTIONS

function page2() {
  // creates a question title element
  const question = document.createElement("h1");
  question.innerText = qInput.value;
  question.classList.add("page2-title");

  // if there is no input, returns an error message
  if (question.innerText === "") {
    if (document.querySelector(".error-message") === null) {
      const error = document.createElement("p");
      error.innerText = "Type your question above!";
      error.classList.add("error-message");
      appDiv.appendChild(error);
    }

    // generates the page 2
  } else {
    const error = document.querySelector(".error-message");
    error.parentNode.removeChild(error);
    howTo.parentNode.removeChild(howTo);
    qInput.parentNode.removeChild(qInput);
    startBtn.parentNode.removeChild(startBtn);
    appDiv.style.height = "90vh";
    appDiv.appendChild(question);
  }
}
