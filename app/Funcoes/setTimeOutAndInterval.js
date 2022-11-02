var count = 0;

setTimeout(() => {
    console.log(
        "Execute onde after timer"
    )
}, 0);

const myInterval = setInterval(() => {
    count++;

    console.log(
        "Keep execute until stop"
    );

    if (count == 5)
        stopInterval();

}, 100)

function stopInterval() {
    clearInterval(myInterval);
}