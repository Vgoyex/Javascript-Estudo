class Eletronic {
  constructor(device) {
    this.device = device;
    this.on = 0;
  }

  //Método de instancia -> método referente ao objeto ou, instanciação do objeto
  turnOn() {
    if (this.on == 1) {
      return `${this.device} já ligado`;
    } else {
      this.on == 1;
      console.log(`Ligou ${this.device}`);
    }
  }

  turnOff() {
    if (this.on == 0) {
      return `${this.device} já desligado`;
    } else this.on = 0;
  }

  //Método estático -> método referente a classe
  static teste() {
    console.log(`Método estático`);
  }
}

const eletronic = new Eletronic(`Monitor`);

eletronic.turnOn();
Eletronic.teste();
