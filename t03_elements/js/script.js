window.onload = () => {
  const parent = document.querySelector("#characters")

  for (let i = 0; i < parent.children.length; i++) {
    const child_elem = parent.children[i]
    const class_elem = child_elem.classList.value.length
      ? child_elem.classList.value
      : child_elem.classList.add("unknown")
console.log(child_elem.classList);
    const dataName = child_elem.getAttribute("data-element")
      ? child_elem.dataset.element
      : (child_elem.dataset.element = "none")

    let circle_air = document.createElement("div")
    let circle_fire = document.createElement("div")
    let circle_water = document.createElement("div")
    let circle_earth = document.createElement("div")
    let circle_line = document.createElement("div")

    circle_air.classList.add("elem", "air")
    circle_fire.classList.add("elem", "fire")
    circle_water.classList.add("elem", "water")
    circle_earth.classList.add("elem", "earth")
    circle_line.classList.add("none", "elem")

    let line = document.createElement("div")

    line.classList.add("line")
    circle_line.appendChild(line)
    let br = document.createElement("br")

    if (child_elem.dataset.element == "air water earth fire") {
      child_elem.appendChild(br)
      child_elem.appendChild(circle_air)
      child_elem.appendChild(circle_fire)
      child_elem.appendChild(circle_water)
      child_elem.appendChild(circle_earth)
    }
    if (child_elem.dataset.element == "water") {
      child_elem.appendChild(br)
      child_elem.appendChild(circle_water)
    }
    if (child_elem.dataset.element == "fire") {
      child_elem.appendChild(br)
      child_elem.appendChild(circle_fire)
    }
    if (child_elem.dataset.element == "earth") {
      child_elem.appendChild(br)
      child_elem.appendChild(circle_earth)
    }
    if (child_elem.dataset.element == "none") {
      child_elem.appendChild(br)

      child_elem.appendChild(circle_line)
    }
  }
}
