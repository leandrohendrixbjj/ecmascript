const motos = ['SV', 'Gladius', 'CB500', 'XT600'];

for (let index = 0; index < motos.length; index++) {
  console.log(`${index} : ${motos[index]}`);

  if (motos[index] == 'CB500')
    break;
}    
