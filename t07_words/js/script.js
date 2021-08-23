function addWords(obj, wrds) {
  let array_of_wrds = wrds.match(/\w+/g)
  let unique_words = obj.words.match(/\w+/g)
  for (let index = 0; index < array_of_wrds.length; index++) {
    unique_words.push(array_of_wrds[index])
  }
  let set = [...new Set(unique_words)].join(" ")
  obj.words = set
  return obj
}
function removeWords(obj, wrds) {
  let array_of_wrds = wrds.match(/\w+/g)
  let unique_words = obj.words.match(/\w+/g)
  let returned = []
  for (let index = 0; index < unique_words.length; index++) {
    if (array_of_wrds.indexOf(unique_words[index]) == -1) {
      returned.push(unique_words[index])
    }
  }
  let set = [...new Set(returned)].join(" ")
  obj.words = set
  return obj
}
function changeWords(obj, oldWrds, newWrds) {
  let array_of_oldWrds = oldWrds.match(/\w+/g)

  let unique_words = obj.words.match(/\w+/g)
  let returned = unique_words.map((x) => {
    for (let index = 0; index < array_of_oldWrds.length; index++) {
      if (array_of_oldWrds.indexOf(x) !== -1) {
        return newWrds
      } else {
        return x
      }
    }
  })

  let set = [...new Set(returned)].join(" ")
  obj.words = set
  return obj
}

const obj = { words: "newspapers newspapers books magazines" }
console.log(obj)
