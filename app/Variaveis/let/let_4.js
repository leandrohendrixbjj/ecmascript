function main(){
  let nome = "leandro";

  if(true){
    let nome = "Soares";
    console.log("INSIDE SCOPE", nome);
  }
  console.log("OUTSIDE SCOPE", nome);
}

main();