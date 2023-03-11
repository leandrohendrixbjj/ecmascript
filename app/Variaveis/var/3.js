//When VAR is declared inside of a block, its value can be seeing
//VAR survive outside of a block
console.clear();

for (var row = 0; row < 2; row++) {
    console.log(`Inside block: ${row}`);
}

try {
    console.log(`Outside of a block ${row}`);
} catch (error) {
    console.log(`Error:${error}`);
}