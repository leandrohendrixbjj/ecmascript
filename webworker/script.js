// Para ver o resultado execute o liveService   
const worker = new Worker('worker.js')
const sumButton = document.getElementById('btnSum')
const bgButton = document.getElementById('btnChangeColor')

sumButton.addEventListener("click", () => {
    worker.postMessage('params is require');
})

worker.onmessage = function (message) {
    alert(`Result: ${message.data}`)
}

bgButton.addEventListener("click", () => {
    if (document.body.style.background != 'green') {
        document.body.style.background = 'green'
    } else {
        document.body.style.background = 'blue'
    }
})