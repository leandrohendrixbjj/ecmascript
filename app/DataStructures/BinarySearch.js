console.clear();

let arr = [1, 2, 3, 4, 5];
const target = 2;

let myIndexOf = (arr) => {

    let newArr = [];
    let halfSize = arr.length / 2;
    let indexArred = Math.ceil(halfSize - 1);
    let half = arr[indexArred];

    // On Right
    if (target >= half)
        newArr = arr.slice(arr.indexOf(half), arr.length);

    // On Left
    if (target <= half)
        newArr = arr.slice(0, indexArred + 1);

    return newArr;
}

while (arr.length > 2) {
    arr = myIndexOf(arr)
}

let found = arr.find(item => item == target) || -1
console.log(`found: ${found}`);