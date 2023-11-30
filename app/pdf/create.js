// Gera um arquivo pdf
console.clear()

const pdf = require('html-pdf')

const content = `
    <html>
      <body>
         <h1>Leandro Soares</h1>
      </body>
    </html>
`

pdf.create(content, {}).toFile("./mypdf.pdf", (err, res) => {
    if (err) {
        console.log(`Error na geração do pdf: ${err}`);
    } else {
        console.log(res);
    }
})
