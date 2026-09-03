const loginBtn = document.querySelector("#logBtn");
const loginForm = document.querySelector(".loginpage");
const logincros = document.querySelector(".loginpage #logCross");
const rememberMe = document.querySelector(".loginpage .forgetlink #p1");
const rememberMeInput = document.querySelector(".loginpage .forgetlink input");
const searchCross = document.querySelector(".search #searchCross");
const searchs = document.querySelector(".search #searchs");
const searchInput = document.querySelector(".search input");
const filter = document.querySelector(".navbar .navRight .search #filter");
const contentLs = document.querySelector("main .contentLs");

// Show form
loginBtn.addEventListener("click", (e) => {
  loginForm.classList.add("active");
});

logincros.addEventListener("click", (e) => {
  loginForm.classList.remove("active");
});

rememberMe.addEventListener("click", (e) => {
  if (e.target.tagName !== "INPUT") {
    rememberMeInput.checked = !rememberMeInput.checked;
  }
});

searchCross.addEventListener("click", (e) => {
  searchInput.value = "";
});

searchs.addEventListener("click", (e) => {
  searchInput.value = "";
});

filter.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  contentLs.classList.add("active");
});

document.addEventListener("click", (e) => {
  // if click is NOT inside contentLs and NOT on filter button
  if (!contentLs.contains(e.target) && e.target !== filter) {
    contentLs.classList.remove("active");
  }
});

// 1. Create the div
// const floatingBox = document.createElement("div");

// floatingBox.textContent = "Category";

// floatingBox.className = "floating-box";

// document.body.appendChild(floatingBox);
