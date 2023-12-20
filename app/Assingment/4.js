console.clear()

const user = {
    person: {
        age: 34,
        email: 'johnDoe@gmail.com'
    }
}

const { person: { age: userAge, email: userEmail } } = user;

console.log('Email: ', userEmail);
console.log('Age: ', userAge);