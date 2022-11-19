//Formata valor monetario
console.clear();
function formatValue(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: "BRL" })
}

const salario = 9000;
const horas = 160;
const salarioHora = salario / 160;
const salarioDia = salarioHora * 8;
const salarioSemana = salarioDia * 5;

const valorHora = formatValue(salarioHora);
const valorDia = formatValue(salarioDia);
const valorSemana = formatValue(salarioSemana);

console.log(
    `Valor hora: ${valorHora} Valor dia: ${valorDia} Valor semana: ${valorSemana}`);
