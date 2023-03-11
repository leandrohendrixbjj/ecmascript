//Let has local scope value
console.clear()
function assignPerson() {
  let name = "Leandro";

  if (true) {
    let name = "Soares";
    console.log("INSIDE SCOPE IF:", name);
  }
  console.log("OUTSIDE SCOPE IF:", name);
}
assignPerson();