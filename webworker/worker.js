onmessage = function (message) {
    let sum = 0
    for (let row = 0; row < 10000000000; row++) {
        sum += row
    }
    this.postMessage(sum)
}