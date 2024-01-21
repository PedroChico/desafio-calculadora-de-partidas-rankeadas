function heroi(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    return saldo;
}

let saldoHeroi = heroi(350, 100);
console.log("O saldo do Herói é de " + saldoHeroi + " vitórias");

switch (true) {
    case saldoHeroi < 10:
        console.log("O Herói tem saldo de " + saldoHeroi + " e está no nível de Ferro");
        break;
    case saldoHeroi > 10 && saldoHeroi <= 20:
        console.log("O Herói tem saldo de " + saldoHeroi + " e está no nível de Bronze");
        break;
    case saldoHeroi > 20 && saldoHeroi <= 50:
        console.log("O Herói tem saldo de " + saldoHeroi + " e está no nível de Prata");
        break;
    case saldoHeroi > 50 && saldoHeroi <= 80:
        console.log("O Herói tem saldo de " + saldoHeroi + " e está no nível de Ouro");
        break;
    case saldoHeroi > 80 && saldoHeroi <= 90:
        console.log("O Herói tem saldo de " + saldoHeroi + " e está no nível de Diamante");
        break;
    case saldoHeroi > 90 && saldoHeroi <= 100:
        console.log("O Herói tem saldo de " + saldoHeroi + " e está no nível de Lendário");
        break;
    case saldoHeroi > 100:
        console.log("O Herói tem saldo de " + saldoHeroi + " e está no nível de Imortal");
        break;
    }
