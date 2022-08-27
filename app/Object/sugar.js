const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};

//Shor way
const createPerson = (name, age, gender) => ({name, age, gender});