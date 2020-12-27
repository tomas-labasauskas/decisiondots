// SELECTORS

const appDiv = document.querySelector(".app");
const qInput = document.querySelector(".question input");
const startBtn = document.querySelector(".start");
const howTo = document.querySelector(".how-to");
const qDiv = document.querySelector(".question");
const header = document.querySelector(".desktop-nav");

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
    page3Btn.addEventListener("click", page3Check);
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
  if (index === 4) {
    appDiv.style.height = "90rem";
  }
  if (index === 5) {
    appDiv.style.height = "95rem";
  }
  if (index === 6) {
    appDiv.style.height = "100rem";
  }
  if (index === 7) {
    appDiv.style.height = "105rem";
  }
  // if there are 8 options - remove the add button
  let addBtn = document.querySelector("#add-button");
  if (index === 8) {
    addBtn.parentNode.removeChild(addBtn);
  }
}

// check if all options have values
function page3Check() {
  const optionsList = document.querySelectorAll(".inp");
  const options = Array.prototype.slice.call(optionsList);
  let nullCount = 0;
  options.forEach((opt) => {
    if (opt.value === "") {
      nullCount = nullCount + 1;
    }
  });

  if (nullCount > 0) {
    if (document.querySelector(".error-message") === null) {
      const errM = document.createElement("p");
      errM.innerText = "Fill all of the options!";
      errM.classList.add("error-message");
      appDiv.appendChild(errM);
    }
  } else {
    // if there is an error message remove  it before loading next page
    if (document.querySelector(".error-message") !== null) {
      const erM = document.querySelector(".error-message");
      erM.parentNode.removeChild(erM);
    }

    page3Generator();
  }
}

// generate page 3
function page3Generator() {
  // take all of the input values
  const optionsDiv = document.querySelector(".options");
  const optionDivs = document.querySelectorAll(".option");
  const optionsList = document.querySelectorAll(".inp");
  const allBtns = document.querySelectorAll("button");
  const options = Array.prototype.slice.call(optionsList);

  appDiv.style.height = "90vh";

  optionsDiv.classList.add("page3");

  // removes all buttons from page 2
  allBtns.forEach((btn) => {
    btn.parentNode.removeChild(btn);
  });

  // create buttons conttainer
  const btnsDiv = document.createElement("div");
  btnsDiv.classList.add("buttons-container");
  optionsDiv.appendChild(btnsDiv);

  // create tables container
  const proTableContainer = document.createElement("div");
  proTableContainer.classList.add("pro-table-container");
  optionsDiv.appendChild(proTableContainer);

  let index = 0;
  // create a table for each value
  options.forEach((opt) => {
    const option = opt.value;
    index = index + 1;
    // console.log(index, option);

    //create the number button
    const numberBtn = document.createElement("button");
    numberBtn.innerText = index;
    numberBtn.id = "btn-toggle";
    btnsDiv.appendChild(numberBtn);

    // create the table div
    const prosTableDiv = document.createElement("div");
    prosTableDiv.classList.add("pro-table");
    prosTableDiv.id = "table" + index;
    proTableContainer.appendChild(prosTableDiv);

    //create the option title
    const title = document.createElement("h2");
    title.innerText = option;
    prosTableDiv.appendChild(title);

    // create pro-con div
    const proConDiv = document.createElement("div");
    proConDiv.classList.add("pro-con");
    prosTableDiv.appendChild(proConDiv);

    // create pros div
    const prosDiv = document.createElement("div");
    prosDiv.classList.add("pros");
    proConDiv.appendChild(prosDiv);

    // create cons div
    const consDiv = document.createElement("div");
    consDiv.classList.add("cons");
    proConDiv.appendChild(consDiv);

    let someTimes = 1;
    while (someTimes < 8) {
      // creates 7 pros
      const pro = document.createElement("div");
      pro.classList.add("pro");
      prosDiv.appendChild(pro);
      const proInp = document.createElement("input");
      proInp.classList.add("pro-inp");
      proInp.placeholder = "Pro ...";
      pro.appendChild(proInp);
      const proInpW = document.createElement("input");
      proInpW.classList.add("pro-inp-w");
      proInpW.placeholder = "1-10";
      proInpW.type = "number";
      proInpW.max = "10";
      proInpW.min = "0";
      proInpW.step = "0.1";
      pro.appendChild(proInpW);

      // create 7 cons
      const con = document.createElement("div");
      con.classList.add("con");
      consDiv.appendChild(con);
      const conInp = document.createElement("input");
      conInp.classList.add("con-inp");
      conInp.placeholder = "Con ...";
      con.appendChild(conInp);
      const conInpW = document.createElement("input");
      conInpW.classList.add("con-inp-w");
      conInpW.placeholder = "1-10";
      conInpW.type = "number";
      conInpW.max = "10";
      conInpW.min = "0";
      conInpW.step = "0.1";
      con.appendChild(conInpW);
      someTimes = someTimes + 1;
    }

    // display only the first option table
    if (index === 1) {
      prosTableDiv.style.display = "block";
      numberBtn.style.background = "#39c959";
    } else {
      prosTableDiv.style.display = "none";
    }
  });

  // removes initial option inputs
  optionDivs.forEach((option) => {
    option.parentNode.removeChild(option);
  });

  // create final button
  const calcBtn = document.createElement("button");
  calcBtn.classList.add("calc-btn");
  calcBtn.innerText = "CALCULATE";
  calcBtn.type = "submit";
  appDiv.appendChild(calcBtn);

  // buttons toggle between options
  const optBtnsList = document.querySelector(".buttons-container").children;
  const optBtns = Array.prototype.slice.call(optBtnsList);
  const optsList = document.querySelector(".pro-table-container").children;
  const opts = Array.prototype.slice.call(optsList);

  optBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      optBtns.forEach((btn) => {
        btn.style.background = "#31363f";
      });
      btn.style.background = "#39c959";
      const index = "table" + btn.innerText;
      opts.forEach((opt) => {
        if (opt.id === index) {
          opt.style.display = "block";
        } else {
          opt.style.display = "none";
        }
      });
    });
  });

  // calculate the percentage of pros if all the input weights are correct
  calcBtn.addEventListener("click", function () {
    const checkList = document.querySelectorAll(".pro-inp-w, .con-inp-w");
    const checks = Array.prototype.slice.call(checkList);

    let checkIndex = 0;
    checks.forEach((check) => {
      if (check.value !== "") {
        if (0 > check.value) {
          checkIndex = checkIndex + 1;
        }
        if (10 < check.value) {
          checkIndex = checkIndex + 1;
        }
      }
    });

    if (checkIndex > 0) {
      if (document.querySelector(".error-message") === null) {
        const erM = document.createElement("p");
        erM.classList.add("error-message");
        erM.innerText = "Weight must be between 1 - 10!";
        appDiv.appendChild(erM);
        appDiv.style.height = "95vh";
      }
    } else {
      if (document.querySelector(".error-message") !== null) {
        const erM = document.querySelector(".error-message");
        erM.parentNode.removeChild(erM);
        appDiv.style.height = "90vh";
      }
      let optIndex = 0;
      opts.forEach((opt) => {
        const prosList = opt.querySelectorAll(".pro-inp-w");
        const consList = opt.querySelectorAll(".con-inp-w");
        const pros = Array.prototype.slice.call(prosList);
        const cons = Array.prototype.slice.call(consList);

        // sum each pros and cons
        let prosw = 0;
        pros.forEach((pro) => {
          if (pro.value !== "") {
            prosw = prosw + parseFloat(pro.value);
          }
        });

        let consw = 0;
        cons.forEach((con) => {
          if (con.value !== "") {
            consw = consw + parseFloat(con.value);
          }
        });
        optIndex = optIndex + 1;
        let tablew = 0;
        tablew = consw + prosw;
        tablew = prosw / tablew;
        tablew = tablew * 100;
        tablew = Math.round(tablew);
        console.log(optIndex, tablew);

        const percentage = document.createElement("p");
        percentage.innerText = tablew;
        opt.appendChild(percentage);
      });
    }
  });
}

function page4() {
  console.log("hello there");
}
