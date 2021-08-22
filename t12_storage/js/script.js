// function makeCounter() {
//   let count = 0
//   return function () {
//     return count++
//   }
// }

// let counter = makeCounter()
// function doSave() {
//   makeCounter()
//   //Set the item in doSave()
//   localStorage.setItem(counter(), text.value)
//   let outtext = Object.values({ ...localStorage })
//   console.log(outtext);
//   let output = document.getElementById("cookies")
//   output.textContent += localStorage.getItem(`${counter()}`)
// }

// //When the window loads...
// window.onload = function () {
//   saveButton = document.querySelector(".Show")
//   saveButton.onclick = doSave

//   textarea = document.getElementById("text")
// }

const elementBtn = document.querySelector('.Show');
const elementUl = document.querySelector('ul');

function updateStorage() {
  const data = [];
  for (let element of elementUl.querySelectorAll('li')) {
    data.push(element.textContent);
  }
  localStorage['items'] = JSON.stringify(data);
}

function updateUl(items) {
  const html = [];
  for (let item of items) {
    html.push(`<li>${item}</li>`);
  }
  elementUl.innerHTML = html.join('');
}

elementBtn.onclick = () => {
  const elementsLi = elementUl.querySelectorAll('li');
  const newLi = document.createElement('li');
  newLi.textContent = elementsLi.length + 1;
  elementUl.append(newLi);
  updateStorage();
}

window.onstorage = event => {
  updateUl(JSON.parse(event.newValue));
}
