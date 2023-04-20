console.clear();

// Race, All e setlled

const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'p1')
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'p2')
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'p3')
});

Promise.race([p1, p2, p3])
    .then(res => console.log(res))
    .then(error => error);

