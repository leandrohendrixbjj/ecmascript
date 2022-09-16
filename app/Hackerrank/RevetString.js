let str = "123";
let word = [];
let letter = "";

try{
  
  if (typeof str !== 'string')
    throw new Error("Not a string");

  for(let row in str){
    word.push(str[row]);
  }

  for(let row in str){
    letter += word.pop();
  }
  console.log(letter);
}catch(err){
   console.log(err);
}  

