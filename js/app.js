// SELECTORS

const appDiv = document.querySelector(".app");
const qInput = document.querySelector(".question input");
const startBtn = document.querySelector(".start");
const howTo = document.querySelector(".how-to");
const qDiv = document.querySelector(".question");

// EVENT LISTENERS

document.addEventListener("DOMContentLoaded", clearInput);
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
    if (error === null) {
    } else {
      error.parentNode.removeChild(error);
    }
    howTo.parentNode.removeChild(howTo);
    qInput.parentNode.removeChild(qInput);
    startBtn.parentNode.removeChild(startBtn);
    qDiv.parentNode.removeChild(qDiv);
    appDiv.style.height = "90vh";
    appDiv.id = "app-full";
    appDiv.appendChild(question);
    // create option div
    const options = document.createElement("div");
    options.classList.add("options");
    appDiv.appendChild(options);
    // add two options
    // op 1
    const option1 = document.createElement("div");
    option1.classList.add("option");
    const opInpDiv1 = document.createElement("div");
    opInpDiv1.classList.add("op-inp");
    const input1 = document.createElement("input");
    input1.classList.add("inp");
    input1.placeholder = "Option #1 ...";
    const n1 = document.createElement("h2");
    n1.classList.add("numb");
    n1.innerText = "1";
    opInpDiv1.appendChild(n1);
    opInpDiv1.appendChild(input1);
    option1.appendChild(opInpDiv1);
    options.appendChild(option1);
    // op 2
    const option2 = document.createElement("div");
    option2.classList.add("option");
    //container for input and number
    const opInpDiv2 = document.createElement("div");
    opInpDiv2.classList.add("op-inp");
    const input2 = document.createElement("input");
    input2.classList.add("inp");
    input2.placeholder = "Option #2 ...";
    const n2 = document.createElement("h2");
    n2.classList.add("numb");
    n2.innerText = "2";
    const breakLine = document.createElement("div");
    breakLine.classList.add("break-line");
    opInpDiv2.appendChild(n2);
    opInpDiv2.appendChild(input2);
    option2.appendChild(breakLine);
    option2.appendChild(opInpDiv2);
    options.appendChild(option2);
    // add a button for adding more options
    const addBtn = document.createElement("button");
    addBtn.id = "add-button";
    addBtn.innerText = "+";
    appDiv.appendChild(addBtn);
    // add a button for submiting the options
    const page3Btn = document.createElement("button");
    page3Btn.id = "page3-button";
    page3Btn.innerText = "THAT'S IT";
    appDiv.appendChild(page3Btn);
    // on click - add option
    addBtn.addEventListener("click", addOption);
    // create the third page
    page3Btn.addEventListener("click", page3);
  }
}

function clearInput() {
  qInput.value = "";
}

// add option
function addOption() {
  const options = document.querySelector(".options");
  let index = document.querySelector(".options").children.length + 1;
  let optionName = "option" + index;
  let opInpDivName = "opInpDiv" + index;
  let inputName = "input" + index;
  let nName = "n" + index;
  let breakLineName = "breakLine" + index;

  optionName = document.createElement("div");
  optionName.classList.add("option");
  //container for input and number
  opInpDivName = document.createElement("div");
  opInpDivName.classList.add("op-inp");
  inputName = document.createElement("input");
  inputName.classList.add("inp");
  inputName.placeholder = "Option #" + index + " ...";
  nName = document.createElement("h2");
  nName.classList.add("numb");
  nName.innerText = index;
  breakLineName = document.createElement("div");
  breakLineName.classList.add("break-line");
  opInpDivName.appendChild(nName);
  opInpDivName.appendChild(inputName);
  optionName.appendChild(breakLineName);
  optionName.appendChild(opInpDivName);
  options.appendChild(optionName);
  // expand app element
  if (index === 5) {
    appDiv.style.height = "100vh";
  }
  if (index === 6) {
    appDiv.style.height = "110vh";
  }
  if (index === 7) {
    appDiv.style.height = "115vh";
  }
  // if there are 8 options - remove the add button
  let addBtn = document.querySelector("#add-button");
  if (index === 8) {
    addBtn.parentNode.removeChild(addBtn);
  }
}

function page3() {
  console.log("page 3");
}
