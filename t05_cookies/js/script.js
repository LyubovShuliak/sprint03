function WriteCookie() {
  if (document.myform.customer.value == "") {
    alert("Enter some value!")
    return
  }
  cname = escape(document.myform.customer.value) + ";"
  document.cookie = "name=" + cname
  let archive = document.getElementById("archive")
  let cookiesd = []
  console.log(cookiesd)
  let l = cname

  cookiesd.push(l)
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  let expires = "expires=" + d.toUTCString()
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

function getCookie(cname) {
  let name = cname + "="
  let ca = document.cookie.split(";")
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == " ") {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ""
}
