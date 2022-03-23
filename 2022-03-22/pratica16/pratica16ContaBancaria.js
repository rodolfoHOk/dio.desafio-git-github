class ContaBancaria {
  constructor(agencia, numero, tipo, saldo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = saldo;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }

  sacar(valor) {
    if (valor > this._saldo) return "Operação negada: sem saldo suficiente";

    this._saldo = this._saldo - valor;

    return this._saldo;
  }

  depositar(valor) {
    this._saldo += valor;

    return this._saldo;
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, saldo, cartaoCredito) {
    super(agencia, numero, "corrente", saldo);
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, "poupança", saldo);
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, "universitária", saldo);
  }

  sacar(valor) {
    if (valor > 500) return "Operação negada: Saque acima do limite estipulado";

    if (valor > this._saldo) return "Operação negada: sem saldo suficiente";

    this._saldo = this._saldo - valor;

    return this._saldo;
  }
}

/*
const minhaConta = new ContaCorrente(1, 123, 100, true);
undefined
minhaConta.saldo;
100
minhaConta.depositar(150);
250
minhaConta.sacar(300);
"Operação negada: sem saldo suficiente"
minhaConta.sacar(50);
200

const contaPoup = new ContaPoupanca(1, 124, 1000);
undefined
contaPoup.saldo
1000

const contaUniv = new ContaUniversitaria(1, 125, 1000);
undefined
contaUniv.sacar(600);
"Operação negada: Saque acima do limite estipulado"
contaUniv.sacar(500);
500
contaUniv.saldo;
500
contaUniv.saldo = 600;
600
contaUniv.saldo;
600
*/
