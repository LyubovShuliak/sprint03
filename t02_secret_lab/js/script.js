function transformation() {

  if (document.querySelector("#hero").innerHTML !== "HULK") {
    document.querySelector("#hero").innerHTML = "HULK"
    document.querySelector("#hero").style.fontSize = "130px"
    document.querySelector("#hero").style.letterSpacing = "6px"
    document.querySelector("#lab").style.background = "#70964b"
  } else {
    document.querySelector("#hero").innerHTML = "Bruce Banner"
    document.querySelector("#hero").style.fontSize = "60px"
    document.querySelector("#hero").style.letterSpacing = "2px"
    document.querySelector("#lab").style.background = "#ffb300"

  }
}