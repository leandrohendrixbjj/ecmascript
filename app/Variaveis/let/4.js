//When Let is declared inside of a block, its value can be seeing
console.clear();

for (let row = 0; row < 2; row++) {
  console.log(`Inside block: ${row}`);
}

try {
  console.log(`Outside of a block ${row}`);
} catch (error) {
  console.log(`Error:${error}`);
}