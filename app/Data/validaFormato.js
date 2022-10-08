console.clear();

function validaData(data) {
  const regExp = /^\d{1,2}\-\d{1,2}\-\d{4}$/;
  return new Promise((resolve, reject) => {
    if (regExp.test(data))
      resolve(data);
    reject('A data não é correta')
  });
}

function print(data) {
  return new Date(data).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
}

async function start() {
  try {
    let first = await validaData("11-01-2020");
    let dateEnDefault = first.split('-').reverse().join('-');

    console.log(
      print(dateEnDefault)
    );
  } catch (err) {
    console.log(err)
  }
}

start();

