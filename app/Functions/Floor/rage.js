function randomRage(max, min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomRage(1,10));