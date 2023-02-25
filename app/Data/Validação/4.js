console.clear();
const date = new Date("2022/01/25 13:23:59") // 2022-01-25T03:00:00.000Z

const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: 'numeric',
    minutes: 'numeric',
    seconds: 'numeric'
}

const actual = date.toLocaleDateString("pt-br", { ...options })

console.log(actual);