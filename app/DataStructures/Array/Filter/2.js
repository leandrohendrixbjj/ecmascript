console.clear();

//Parameters
// Element => Being processed in the array.
// Index => index of the current element
// Arr => the array row

[12, 13, 14].filter((element, index, arr) => {
    console.log(
        `Element: ${element} Index: ${index} arr: ${arr}`);
});