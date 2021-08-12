let superTeam = {}
superTeam.title = prompt("Please enter your team title", "")
superTeam.leader = prompt("Please enter your leader name ", "")
superTeam.members = prompt("Please enter your members names separated by commas ", " ").split(",")
superTeam.memberCount = 1 + superTeam.members.length
superTeam.agenda = prompt("Please enter your team agenda ", "")

function boolean() {
  let bool = prompt("Please enter false or leave default value", "true")
  if (bool == 'true') {
    return true
  }
  if (bool == "false") {
    return false
  } else {
    return boolean()
  }
}

superTeam.isEvil = boolean()
alert(`Here's a team:\nname: ${superTeam.title}\nleader: ${superTeam.leader}\nmembers: ${superTeam.members.join(", ")}\nmemberCount: ${superTeam.memberCount}\nagenda: ${superTeam.agenda}`);