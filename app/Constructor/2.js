console.clear();

const Polygon = require('./Polygon.js');

class Square extends Polygon {
    // super chama o construtor da classe pai e permite acesso ao seus atributos    
    constructor(height, width) {
        super(height, width);
        // Nas classes filhas, super() deve ser chamado antes de usar o this. 
        // Se não ocorrer um erro de referência.
        this.height;
        this.width;
    }
}

let square = new Square();
console.log(`Altura: ${square.height}`);
console.log(`Peso: ${square.width}`);

