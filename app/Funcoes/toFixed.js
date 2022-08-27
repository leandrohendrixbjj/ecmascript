// Aredonda para o números de casas informado

function ganhoPorHora(salario, horasTrabalhadasNoMes) {
    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    return salarioHora.toFixed(2);
}

console.log(ganhoPorHora(3000,176)); 