//VAR doesn't have a local scope value
console.clear()
function assignPerson() {
  var name = "Leandro";

  if (true) {
    var name = "Soares";
    console.log("INSIDE SCOPE IF:", name);
  }
  console.log("OUTSIDE SCOPE IF:", name);
}
assignPerson();