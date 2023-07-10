console.clear();

const customer = '{"name":"Soares", "phones":["123","456"]}';

const customerJson = JSON.parse(customer);

console.log(customerJson);
console.log(typeof customerJson);
