console.clear();

global = 0

sum = () => { global++ }
plus = () => { global += 2 }

sum()
plus()

console.log(global);
