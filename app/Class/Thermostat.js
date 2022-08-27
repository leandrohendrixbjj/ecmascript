class Thermostat {
    constructor(fahrenheit) {
      this._fahrenheit = fahrenheit;
    }
    
    get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
    }
    
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }

 let thermo = new Thermostat(76);
 
 console.log('Farenheit', thermo.temperature.toFixed(2));

 thermo.temperature = 26;

 console.log('Celsius', thermo.temperature);
