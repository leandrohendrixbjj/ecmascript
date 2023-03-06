console.clear();

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 4;

let myIndexOf = (arr) => {

    console.log(arr);
    let newArr = [];
    let index = Math.floor(arr.length / 2)

    let halfValue = arr[index];

    if (target <= halfValue)
        newArr = arr.slice(0, index);

    if (target >= halfValue)
        newArr = arr.slice(index, arr.length);

    return newArr;
}


arr = myIndexOf(arr)
arr = myIndexOf(arr)
arr = myIndexOf(arr)
console.log(arr);

console.log(arr);






