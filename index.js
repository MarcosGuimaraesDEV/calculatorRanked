let vitorias =105, derrotas =51;
let saldoVitorias = rank(vitorias,derrotas);
let nivel = mostraRank(saldoVitorias);

function rank(vitorias,derrotas){
    return vitorias-derrotas;
}

function mostraRank(saldo){
    if(vitorias<=10){
        return "Ferro";
    }
    else if(saldo<=20){
        return "Bronze";
    }
    else if(saldo<=50){
        return "Prata";
    }
    else if(saldo<=80){
        return "Ouro";
    }
    else if(saldo<=90){
        return "Diamante";
    }
    else if(saldo<=100){
        return "Lendário";
    }
    else{
        return "Imortal";
    }
}
console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
