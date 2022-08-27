const data = [
  {
    id:'1',
    nome:'leandro',
    idade:30
  },
  {
    id:'2',
    nome:'soares',
    idade:28
  }
];

function filter(data, fields){ 
  const customer = {};

  fields.forEach(field => {
     if (data.hasOwnProperty(field)){
      customer[field] = data[field];
     }
  });
  return customer;
}

const customers = data.map(customer => {
   return filter(customer, ['id','idade']);
});

console.log(customers);

