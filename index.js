console.clear()

const person = {
    data: {
        name: 'leandro',
        age: 40
    }
}

const { data: { name: userName, age: userAge } } = person

console.log(userName);
console.log(userAge);

