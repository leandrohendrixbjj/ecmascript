
const date = new Date("2023-12-01");

try {

    const regex = /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])/gm

    const [full, year, month, day] = regex.exec(date.toISOString());

    const actual = `${day}/${month}/${year}`

    console.log(actual)
} catch (error) {
    console.log("A data está inválida");
}