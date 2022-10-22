//How EventLoop works
console.clear();

console.log("Linha_1");

setTimeout(() => {
    console.log("Linha_2");
}, 1000);

setTimeout(() => {
    console.log("Linha_3");
}, 0);

function idade() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve("Linha_4");
        }, 5000)
    });
}

idade().then((r) => {
    console.log(r);
    console.log("Linha_5");
});

console.log("Linha_6");
