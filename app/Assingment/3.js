console.clear()

const user = {
    person: {
        age: 34,
        email: 'johnDoe@gmail.com'
    }
}

const { age: userAge, email: userEmail } = user.person

console.log('Email: ', userEmail);
console.log('Age: ', userAge);