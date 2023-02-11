const word = 'racecar';
const letters = [];
let rword = "";

for(let row in word){
   letters.push(word[row]);
}

for(let row in word){
   rword += letters.pop();
}

word == rword ? console.log('Is a Palindrome') : console.log('Is not a Palindrome');