// "SuperClass"
function Conta(fc, account, balance) {
  //fc = financial center
  this.fc = fc;
  this.account = account;
  this.balance = balance;
}

Conta.prototype.withdraw = function (value) {
  if (this.fc && this.account) {
    if (this.balance < value) {
      this.checkBalance();
      console.log(
        `Not enough balance for Fc: ${this.fc} | Account: ${this.account}`
      );
      return false;
    } else {
      this.checkBalance();
      this.balance -= value;
      return this.checkBalance();
    }
  }
};

Conta.prototype.deposit = function (value) {
  this.balance += value;
  this.checkBalance();
};

Conta.prototype.checkBalance = function () {
  console.log(
    `Fc: ${this.fc} | Account: ${
      this.account
    } | Cur Balance R$ ${this.balance.toFixed(2)}`
  );
  return `Current Balance: R$ ${this.balance.toFixed(2)}`;
};

//CC = Conta Corrente
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

function ContaCorrente(fc, account, balance, limit) {
  Conta.call(this, fc, account, balance);
  this.limit = limit;
}

//Sobreescrevendo o método
ContaCorrente.prototype.withdraw = function (value) {
  if (this.fc && this.account) {
    if (this.balance + this.limit < value) {
      this.checkBalance();
      console.log(`Not enough balance for Fc: ${this.fc} | Account: ${this.account}`);
      return false;
    } else {
      this.checkBalance();
      this.balance -= value;
      return this.checkBalance();
    }
  }
};

function ContaPoupanca(fc, account, balance) {
  Conta.call(this, fc, account, balance);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

//* Testando Conta
let teste = new Conta(11, 22, 10);
teste.deposit(10);
teste.withdraw(110);
//* Testando Conta Corrente
let cc = new ContaCorrente(1533, 22, 0, 100);
cc.deposit(10);
cc.withdraw(110);

console.log("\n");
//* Testando Conta Poupança
let contap = new ContaPoupanca(12, 33, 0);
contap.deposit(10);
contap.withdraw(110);
contap.withdraw(1);
