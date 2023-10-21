console.clear();

function range(min, max) {
    let doNotPrintZero = 1;
    setInterval(() => {
        console.log(
            Math.floor(Math.random() * (max - min)) + doNotPrintZero
        );
    }, 1000);
}
range(1, 100);
