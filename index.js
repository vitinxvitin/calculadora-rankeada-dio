//detalhes do heroi
let vitoria = 20 
let derrota = 5
let vitoriaEDerrota = (vitoria - derrota)
let rank = ""

//calculo de rank
if (vitoriaEDerrota < 10 ) {
    rank = "Ferro"
} else if (vitoriaEDerrota >= 11 && vitoriaEDerrota <= 20) {
    rank = "Bronze"
} else if (vitoriaEDerrota >= 21 && vitoriaEDerrota <= 50) {
    rank = "Prata"
} else if (vitoriaEDerrota >= 51 && vitoriaEDerrota <= 80) {
    rank = "Ouro"
} else if (vitoriaEDerrota >= 81 && vitoriaEDerrota <= 90) {
    rank = "Diamante"
} else if (vitoriaEDerrota >= 91 && vitoriaEDerrota <= 100) {
    rank = "Lendário"
} if (vitoriaEDerrota >= 101) {
    rank = "Imortal"
}
console.log("O herói tem o saldo de vitórias de" + vitoria + " e está no rank " + rank)
