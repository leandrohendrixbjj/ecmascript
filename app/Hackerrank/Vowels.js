//Impressão de vogais e depois as consoantes

const str = "javascriptloops";
let newStr = "";

function getVowels(strs){
  const arrVowels = ['a','e','i','o','u'];
  const vowels = [];

  for(let row in strs){
    let vowel = arrVowels.find(letter => letter == strs[row]);

    if (vowel)
      vowels.push(vowel);   
  }

  return vowels;
}

function getConsonantes(strs){
  const arrVowels = ['a','e','i','o','u'];
  const consonantes = [];
  
  for(let row in strs){
    let consonante = arrVowels.find(letter => letter == strs[row]);
    
    if (!consonante)
      consonantes.push(strs[row]);   
  }  
  return consonantes;
}

const data = [...getVowels(str), ...getConsonantes(str)];

for(let row in data){
    newStr += ` ${data[row]} `;
}

console.log(newStr);