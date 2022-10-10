const toggle = document.getElementById("toggleDark")
const body = document.querySelector("body")

const colors = {
  green_dark: "#547340",
  green_light: "#a2c98a",
  white: "#ffffff",
  offWhite: " #ededed",
  black: "#0c0c0c",
  darkGrey: "#212121",
  grey: "#373737",
}

toggle.addEventListener("click", toggleTheme)

function toggleTheme() {
  const add = document.getElementById("add")
  const input_task = document.getElementById("new-task")
  const todo_container = document.getElementById("todo-container")
  const title = document.querySelectorAll(".title")
  const bgButton = document.querySelectorAll(".bg-button")

  this.classList.toggle("bi-moon")
  if (this.classList.toggle("bi-brightness-high-fill")) {
    bgButton.forEach((t) => {
      t.style.backgroundColor = colors.white
      t.style.color = colors.black
    })

    input_task.style.backgroundColor = "transparent"

    todo_container.style.backgroundColor = colors.offWhite

    body.style.backgroundColor = colors.white
    body.style.color = colors.black

    title.forEach((t) => (t.style.color = colors.green_dark))
  } else {
    bgButton.forEach((t) => {
      t.style.backgroundColor = colors.grey
      t.style.color = colors.white
    })

    input_task.style.backgroundColor = colors.darkGrey

    add.style.backgroundColor = colors.grey

    todo_container.style.backgroundColor = colors.darkGrey

    body.style.backgroundColor = colors.black
    body.style.color = colors.white

    title.forEach((t) => (t.style.color = colors.green_light))
  }
}

function refreshTheme() {
  const add = document.getElementById("add")
  const input_task = document.getElementById("new-task")
  const todo_container = document.getElementById("todo-container")
  const title = document.querySelectorAll(".title")
  const bgButton = document.querySelectorAll(".bg-button")

  if (toggle.classList.contains("bi-brightness-high-fill")) {
    bgButton.forEach((t) => {
      t.style.backgroundColor = colors.white
      t.style.color = colors.black
    })

    input_task.style.backgroundColor = "transparent"

    add.style.backgroundColor = colors.white

    todo_container.style.backgroundColor = colors.offWhite

    body.style.backgroundColor = colors.white
    body.style.color = colors.black

    title.forEach((t) => (t.style.color = colors.green_dark))
  } else {
    bgButton.forEach((t) => {
      t.style.backgroundColor = colors.grey
      t.style.color = colors.white
    })

    input_task.style.backgroundColor = colors.darkGrey

    add.style.backgroundColor = colors.grey

    todo_container.style.backgroundColor = colors.darkGrey

    body.style.backgroundColor = colors.black
    body.style.color = colors.white

    title.forEach((t) => (t.style.color = colors.green_light))
  }
}
export { refreshTheme }
