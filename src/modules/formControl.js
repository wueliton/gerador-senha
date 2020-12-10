import passGenerator from "./generatePassword";

const pass = document.querySelector(".pass");
const lengthPass = document.querySelector(".length-pass");
const chkUpperCase = document.querySelector(".chkUpperCase");
const chkLowerCase = document.querySelector(".chkLowerCase");
const chkNumbers = document.querySelector(".chkNumbers");
const chkSimbols = document.querySelector(".chkSimbols");
const progressBar = document.querySelector(".pass-security");
const refresh = document.querySelector(".refresh");

export default () => {
  pass.innerHTML = generate();

  document.addEventListener("change", (el) => {
    if (el.target.type === "checkbox") {
      pass.innerHTML = generate();
    }
  });

  lengthPass.addEventListener("change", (e) => {
    e.preventDefault();
    pass.innerHTML = generate();
  });

  refresh.addEventListener("click", (e) => {
    e.preventDefault();
    refresh.classList.add("active");
    setTimeout(() => {
      refresh.classList.remove("active");
    }, 500);
    pass.innerHTML = generate();
  });
};

function generate() {
  const pass = passGenerator(
    lengthPass.value,
    chkUpperCase.checked,
    chkLowerCase.checked,
    chkNumbers.checked,
    chkSimbols.checked
  );

  progressStatus(lengthPass.value);

  return pass;
}

function progressStatus(value) {
  if (value < 10) {
    let percent = (value / 100) * 1000;
    progressBar.style.width = percent + "%";

    if (value < 4) {
      progressBar.classList.add("danger");
      progressBar.classList.remove("alert");
    } else if (value < 8) {
      progressBar.classList.add("alert");
      progressBar.classList.remove("danger");
    } else {
      progressBar.classList.remove("alert");
      progressBar.classList.remove("danger");
    }
  } else {
    progressBar.style.width = "100%";
  }
}
