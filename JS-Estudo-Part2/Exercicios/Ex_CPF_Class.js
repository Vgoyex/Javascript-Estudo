class ValidaCpf {
  constructor(cpf) {
    this.cpf = cpf;
  }

  get cleanCpf() {
    return this.cpf.replace(/\D+/g, "");
  }

  set cleanCpf(value) {
    this.cpf = value;
  }

  get vCpf() {
    console.log(`getter`);
    return this.cpf;
  }
  set vCpf(value) {
    console.log(`setter`);
    this.cpf = value;
    let valid = this.valid();
    if (valid) {
      this.cpf = this.cleanCpf;
      return this.cpf;
    }
    if (!valid) return `Erro`;
  }

  valid() {
    console.log(this.cleanCpf);
    if (!this.cleanCpf) return false;
    if (typeof this.cleanCpf != "string") return false;
    if (this.cleanCpf.length != 11) return false;
    else return true;
  }

}

let testeCpf = new ValidaCpf(`426.395.579-16`);
testeCpf.vCpf = `176.323.512-13`;
testeCpf.vCpf = `176.323.512-12`;
console.log(JSON.stringify(testeCpf) + "| valid ? " + testeCpf.valid());
