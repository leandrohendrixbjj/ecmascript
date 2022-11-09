console.clear();

let index = 0;
const intervalTime = 1000;

const myInterval = setInterval(() => {
    index++;
    console.log(index)

    if (index == 2) {
        console.log("Stop running")
        stop()
    }
}, intervalTime);

function stop() {
    clearInterval(myInterval);
}