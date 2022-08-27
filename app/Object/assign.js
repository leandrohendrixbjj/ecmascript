const person = {
    "name":"leandro",
    "age":33
}

const hobbies = {
    "nadar":true,
    "jiu-jtsu":true,
    "others":false
}

const leandro = Object.assign(hobbies,person);

console.log(leandro);