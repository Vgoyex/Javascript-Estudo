module.exports = class Pc{
    constructor(motherB="none", cpu="none", ram="none", hd="none"){
        this.motherB = motherB;
        this.cpu = cpu;
        this.ram = ram;
        this.hd = hd;
    }

    showConfig(){
        console.log(`\nMotherBoard-> ${this.motherB}\nCPU -> ${this.cpu}\nRAM -> ${this.ram}\nHD_size -> ${this.hd}\n`)
    }
}