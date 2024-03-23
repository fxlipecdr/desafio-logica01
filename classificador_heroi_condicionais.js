let nomeHeroi = "Steve"
let expHeroi = 1000
let rankHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

if (expHeroi <= 1000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[0]);
} else if (expHeroi <= 2000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[1]);
} else if (expHeroi <= 5000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[2]);
} else if (expHeroi <= 7000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[3]);
} else if (expHeroi <= 8000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[4]);
} else if (expHeroi <= 9000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[5]);
} else if (expHeroi <= 10000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[6]);
} else {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi[7]);
}