// Const can not be declared as an undefined
console.clear()
try {
    const salary;
} catch (error) {
    console.log(`Error:${error}`);
}

