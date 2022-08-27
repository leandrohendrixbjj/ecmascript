function validaData(data){
  if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(data)){
    return "Data Incorreta";
  }
  return "Data Correta";
}

console.log(validaData("12/2001"));