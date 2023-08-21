// Converte Json to CSV
console.clear()
const data = [
    { name: 'leandro', age: '30' },
    { name: 'soares', age: '32' }
]

const columns = Object.keys(data[0])
console.log(columns);
const csv = [
    columns.join(';'),
    ...data.map((row) => {
        return columns.map(column => {
            if (row[column]) {
                const value = String(row[column]).replaceAll('"', "'")
                return `"${value}"`
            }
            return null
        }).join(';');
    }),
].join('\n');

console.log(csv);