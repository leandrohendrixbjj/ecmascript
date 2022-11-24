console.clear();

//Parameters
// Element => Being processed in the array.
// Index => index of the current element
// Arr => the array map
const arr = [12, 13, 14];

const sum = arr.map((element, index, arr) => {
    console.log(
        `Element: ${element} Index: ${index} arr: ${arr}`);

});