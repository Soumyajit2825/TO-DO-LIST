const toggleBtn = document.getElementById("toggleDark");
const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");

toggleBtn.addEventListener("click", toggleTheme);

function toggleTheme() {
  document.body.classList.toggle("dark_mode");
  wrapper.classList.toggle("dark");

  this.classList.toggle("bi-moon");
  this.classList.toggle("bi-brightness-high-fill");
  if (document.body.classList.contains("dark_mode")) {
    localStorage.setItem("website_theme", "dark_mode");
    darkSvg();
  } else {
    localStorage.setItem("website_theme", "default");
    lightSvg()
  }
}

body.onload = function () {
  const theme = localStorage.getItem("website_theme");
  const checkbox = document.querySelector(".dark-mode-slider #checkbox");

  if (theme != null) {
    document.body.classList.remove("default", "dark_mode");
    wrapper.classList.remove("dark");
    toggleBtn.classList.remove("bi-moon", "bi-brightness-high-fill");
    document.body.classList.add(theme);
    if (theme == "dark_mode") {
      checkbox.checked = true;
      toggleBtn.classList.add("bi-moon");
      wrapper.classList.add("dark");
      darkSvg()
    } else {
      toggleBtn.classList.add("bi-brightness-high-fill");
      lightSvg()
    }
  }
};

function darkSvg() {
  document.querySelectorAll("svg").forEach((svg) => {
    svg.querySelectorAll("use")[0].setAttribute("fill", "rgba(23, 23, 23, 0.7")
    svg.querySelectorAll("use")[1].setAttribute("fill", "rgba(23, 23, 23, 0.5")
    svg.querySelectorAll("use")[2].setAttribute("fill", "rgba(23, 23, 23, 0.3")
    svg.querySelectorAll("use")[3].setAttribute("fill", "#171717")
  })
}
function lightSvg() {
  document.querySelectorAll("svg").forEach((svg) => {
    svg.querySelectorAll("use")[0].setAttribute("fill", "rgba(255,255,255, 0.7")
    svg.querySelectorAll("use")[1].setAttribute("fill", "rgba(255,255,255, 0.5")
    svg.querySelectorAll("use")[2].setAttribute("fill", "rgba(255,255,255, 0.3")
    svg.querySelectorAll("use")[3].setAttribute("fill", "#fff")
  })
}