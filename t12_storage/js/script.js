const inputFiled = document.querySelector(".text-input-filed")
const outputList = document.querySelector(".output-list")
const addStorageBtn = document.querySelector(".add-btn")
const clearStorageBtn = document.querySelector(".clear-btn")

addStorageBtn.addEventListener("click", addLocalItem)
clearStorageBtn.addEventListener("click", clearStorage)

function addLocalItem() {
  if (outputList.children[0].innerHTML === "[Empty]") {
    outputList.removeChild(outputList.children[0])
  }

  createOutputItem(inputFiled.value, Date.now() )
  const currentLocalStorage = localStorage.getItem("note_archive")
  const storageItem = {
    message: inputFiled.value,
    date: Date.now(),
  }

  if (currentLocalStorage) {
    console.log(JSON.parse(currentLocalStorage))
    localStorage.setItem(
      "note_archive",
      JSON.stringify([...JSON.parse(currentLocalStorage), storageItem])
    )
  } else {
    localStorage.setItem("note_archive", JSON.stringify([storageItem]))
  }
  inputFiled.value = ""
}

function clearStorage() {
  const shouldDelete = confirm("Are you sure?")
  if (shouldDelete) {
    outputList.innerHTML = null
    localStorage.removeItem("note_archive")

    createEmptyMessage()
  }
}

function createOutputItem(value, date) {
  const outputItem = document.createElement("p")
  outputItem.classList.add("output-item")
  outputItem.innerHTML = "-->" + value + getFormattedDate(date)
  outputList.appendChild(outputItem)
}

window.onload = () => {
  const curentStorage = localStorage.getItem("note_archive")
  const curent = JSON.parse(curentStorage)
  console.log(curent);

  if (curent) {
    for (let i = 0; i < curent.length; i++) {
      createOutputItem(curent[i].message,curent[i].date)
    }
  } else {
    createEmptyMessage()
  }
}

function createEmptyMessage() {
  const noLocalItem = document.createElement("p")
  noLocalItem.innerHTML = "[Empty]"
  outputList.appendChild(noLocalItem)
}
function getFormattedDate(date) {
  const options1 = {
    year: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    month: "numeric",
  }

  const dateTimeFormat = new Intl.DateTimeFormat("en-GB", options1)
  let date1 = dateTimeFormat.format(date).toString()

  return "[" + date1.replace(/[/]/g, ".") + "]"
}

