const user = {
    johnDoe: {
        age: 34,
        email: 'johnDoe@gmail.com'
    }
}

const {johnDoe: {age:userAge, email:userEmail}} = user;

console.log('Email: ', userEmail);
console.log('Age: ', userAge);