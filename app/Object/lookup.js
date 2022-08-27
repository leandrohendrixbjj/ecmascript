function loockup(name){
    const motos = {
      honda: 'pcx',
      yamaha: 'nmax',
      suzuki: 'burgman'
    }
    return motos[name];
}

console.log(loockup('suzuki'));