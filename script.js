function togglemode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/eu-light.png")
  } else {
    img.setAttribute("src", "./assets/eu-dark.png")
  }

  // if (html.classList.contains("light")) {
  // html.classList.remove("light")
  // } else {
  // html.classList.add("light")
  // }
  html.classList.toggle("light")
}
