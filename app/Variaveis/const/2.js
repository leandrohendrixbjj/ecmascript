// Const is immutable
console.clear();
const arr = [5, 6, 7];

try {
    arr = [1, 2, 3];
} catch (error) {
    console.log(`Error:${error}`);
}

arr[2] = 45; // js accept it

console.log(arr);